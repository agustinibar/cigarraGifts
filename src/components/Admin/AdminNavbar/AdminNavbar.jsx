import React from 'react';
import { Link } from 'react-router-dom';
import styles from './adminNavbar.module.css';

const AdminNavbar = () => {
  return (
    <nav className={styles.adminNavbar}>
      <Link to="/admin/dashboard" className={styles.navLink}>Dashboard</Link>
      <Link to="/admin/products" className={styles.navLink}>Gestión de Productos</Link>
      <Link to="/admin/orders" className={styles.navLink}>Gestión de Pedidos</Link>
    </nav>
  );
};

export default AdminNavbar;