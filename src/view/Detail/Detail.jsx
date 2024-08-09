import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config'; 
import styles from './detail.module.css';

const Detail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'products', productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          setProduct(productSnap.data());
        } else {
          console.error("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ id: productId, ...product });
    }
  };

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className={styles.productDetail}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <button onClick={handleAddToCart} className={styles.addButton}>Agregar al Carrito</button>
    </div>
  );
};

export default Detail;
