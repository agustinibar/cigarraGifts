import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {

  if(location.pathname === "/"){
    return null
  }
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles.brand}>Cigarra Gifts</Link>
      <div className={styles.links}>
        <Link to="/home">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/">Log Out</Link>
      </div>
    </nav>
  );
};

export default Navbar;
