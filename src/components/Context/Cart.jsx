// src/components/Cart.jsx
import React from 'react';
import { useCart } from '../Context/CartContext';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const Cart = ({ onClose }) => {
    const { cartItems, clearCart } = useCart();

    return (
        <div className={styles.overlay}>
            <div className={styles.cart}>
                <button className={styles.close} onClick={onClose}>X</button>
                <h2>Carrinho de Compras</h2>

                {cartItems.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    <div>
                        {cartItems.map((item, index) => (
                            <div key={index} className={styles.cartItem}>
                                <img src={item.image} alt={item.title} />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}

                        <div className={styles.actions}>
                            <Link to="/compra"><button className={styles.buy}>Comprar</button></Link>
                            <button className={styles.clear} onClick={clearCart}>Esvaziar Carrinho</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
