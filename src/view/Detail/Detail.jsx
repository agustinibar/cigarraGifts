import { useParams } from 'react-router-dom';
import { CartContext } from '../../CartContext';
import styles from './detail.module.css';
import { useContext } from 'react';

const products = [
    {
      id: 1,
      name: 'Termo Estilo Moderno',
      price: '25.99',
      description: 'Un termo moderno y estilizado perfecto para tus bebidas calientes.',
      image: 'https://acdn.mitiendanube.com/stores/001/459/198/products/20240104_091136-2355adc1b60ed868e717044645584665-1024-1024.jpg',
    },
    {
      id: 2,
      name: 'Taza de Cerámica',
      price: '12.99',
      description: 'Taza de cerámica hecha a mano ideal para tu café matutino.',
      image: 'https://www.eltigreazul.com.ar/wp-content/uploads/2022/08/Taza-Ballena-Cuadrada.jpg',
    },
    {
      id: 3,
      name: 'Set de Estética',
      price: '45.99',
      description: 'Un completo set de estética para mantener tu belleza.',
      image: 'https://pielysalud.com.ar/wp-content/uploads/dc-productos-2288097t-800x800-1.jpg',
    },
  ];

const Detail = () => {
    const { productId } = useParams();
    const product = products.find(p => p.id === parseInt(productId));
    const { addToCart } = useContext(CartContext);
  
    if (!product) {
      return <h2>Producto no encontrado</h2>;
    }
  
    const handleAddToCart = () => {
      addToCart(product);
    };
  
    return (
      <div className={styles.productDetail}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <button onClick={handleAddToCart} className={styles.addButton}>Agregar al Carrito</button>
      </div>
    );
  };
  
  export default Detail;