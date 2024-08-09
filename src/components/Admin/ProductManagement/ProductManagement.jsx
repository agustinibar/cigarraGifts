import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase/config'; // Asegúrate de que esta ruta sea correcta
import styles from './productManagement.module.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddProduct = async () => {
    try {
      let imageUrl = '';

      if (imageFile) {
        const imageRef = ref(storage, `products/${imageFile.name}`);
        const snapshot = await uploadBytes(imageRef, imageFile);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const productData = {
        ...newProduct,
        imageUrl,
      };

      const docRef = await addDoc(collection(db, 'products'), productData);
      setProducts([...products, { id: docRef.id, ...productData }]);
      setNewProduct({ name: '', price: '', stock: '' });
      setImageFile(null);
    } catch (e) {
      console.error("Error adding product: ", e);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      setProducts(products.filter(product => product.id !== id));
    } catch (e) {
      console.error("Error deleting product: ", e);
    }
  };

  return (
    <div className={styles.productManagement}>
      <h2>Gestión de Productos</h2>
      <div className={styles.addProduct}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del Producto"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleInputChange}
        />
        <input
          type="file"
          onChange={handleImageChange}
        />
        <button onClick={handleAddProduct}>Añadir Producto</button>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <div key={product.id} className={styles.productItem}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} width="100" />}
            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
