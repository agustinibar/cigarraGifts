import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
const location = useLocation();

  if(location.pathname === "/"){
    return null
  }
  return (
    <nav className={styles.navbar}>
      <Link to="/home" className={styles.brand}>Inicio</Link>
      <div className={styles.links}>
        <Link to="/profile">Perfil</Link>
        <Link to="/admin/*">Admin</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/">Log Out</Link>
      </div>
    </nav>
  );
};

export default Navbar;
