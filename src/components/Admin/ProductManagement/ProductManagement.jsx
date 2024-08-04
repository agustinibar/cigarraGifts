import React, { useState } from 'react';
import styles from './productManagement.module.css';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', price: 100, stock: 50 },
    { id: 2, name: 'Producto 2', price: 200, stock: 30 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    const updatedProducts = [...products, { ...newProduct, id: products.length + 1 }];
    setProducts(updatedProducts);
    setNewProduct({ name: '', price: '', stock: '' });
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
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
        <button onClick={handleAddProduct}>Añadir Producto</button>
      </div>
      <div className={styles.productList}>
        {products.map(product => (
          <div key={product.id} className={styles.productItem}>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
