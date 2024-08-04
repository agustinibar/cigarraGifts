import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminNavbar from '../../components/Admin/AdminNavbar/AdminNavbar';
import Dashboard from '../../components/Admin/DashboardAdmin/DashboardAdmin';
import ProductManagement from '../../components/Admin/ProductManagement/ProductManagement';
import OrderManagement from '../../components/Admin/OrderManagement/OrderManagement';
import styles from './adminView.module.css';

const Admin = () => {
  return (
    <div className={styles.adminView}>
      <AdminNavbar />
      <div className={styles.adminContent}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductManagement />} />
          <Route path="/orders" element={<OrderManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
