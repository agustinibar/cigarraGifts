import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.cardLink}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price}</p>
      </Link>
      <button onClick={handleAddToCart} className={styles.addButton}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductCard;
