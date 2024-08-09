import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../CartContext';
import { db, auth } from '../../firebase/config'; 
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import styles from './cart.module.css';

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCart = async () => {
      if (auth.currentUser) {
        const cartRef = doc(db, 'carts', auth.currentUser.uid);
        const cartSnap = await getDoc(cartRef);
        if (cartSnap.exists()) {
          setCart(cartSnap.data().items || []);
        }
      }
    };

    fetchCart();
  }, [setCart]);

  const handleRemove = async (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);

    if (auth.currentUser) {
      const cartRef = doc(db, 'carts', auth.currentUser.uid);
      await updateDoc(cartRef, { items: updatedCart });
    }
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map((product, index) => (
              <div key={index} className={styles.cartItem}>
                <img src={product.imageUrl} alt={product.name} className={styles.image} />
                <div className={styles.details}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.price}>${product.price}</p>
                  <button onClick={() => handleRemove(product.id)} className={styles.removeButton}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <p>Total de productos: {totalItems}</p>
            <p>Precio total: ${totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
