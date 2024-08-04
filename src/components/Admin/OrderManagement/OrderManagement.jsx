import React, { useState } from 'react';
import styles from './orderManagement.module.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    // Datos de ejemplo de pedidos
    { id: 1, customer: 'Cliente 1', status: 'Pendiente' },
    { id: 2, customer: 'Cliente 2', status: 'Enviado' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className={styles.orderManagement}>
      <h2>Gestión de Pedidos</h2>
      <div className={styles.orderList}>
        {orders.map(order => (
          <div key={order.id} className={styles.orderItem}>
            <p>Cliente: {order.customer}</p>
            <p>Estado: {order.status}</p>
            <select 
              value={order.status} 
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Enviado">Enviado</option>
              <option value="Entregado">Entregado</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
