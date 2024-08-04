import React from 'react';
import styles from './dashboardAdmin.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Resumen de Ventas y Estadísticas</h2>
      {/* Añadir gráficos y estadísticas aquí */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Ventas Totales</h3>
          <p>$10,000</p>
        </div>
        <div className={styles.statCard}>
          <h3>Pedidos Completados</h3>
          <p>200</p>
        </div>
        <div className={styles.statCard}>
          <h3>Usuarios Activos</h3>
          <p>150</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
