import  ProductCard  from '../../components/ProductCard/ProductCard';
import styles from './home.module.css';
import logo from '../../assets/logo.png';

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

const Home = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.heroSection}>
        <img src={logo} alt="" className={styles.logo}/>
        <h1>Bienvenido a Cigarra Gifts</h1>
        <p>Descubre el regalo perfecto para cualquier ocasión</p>
      </header>
      <section className={styles.productsSection}>
        <h2>Productos Destacados</h2>
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 Cigarra Gifts. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home; 