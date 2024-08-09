import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config'; // Aju sta la ruta si es necesario
import styles from './home.module.css';
import logo from '../../assets/logo.png';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.homePage}>
      <header className={styles.heroSection}>
        <img src={logo} alt="Cigarra Gifts Logo" className={styles.logo} />
        <h1>Bienvenidos a Cigarra Gifts!</h1>
        <p>Descubre el regalo perfecto para cualquier ocasión</p>
      </header>
      <section className={styles.productsSection}>
        <h2>Productos Destacados</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
