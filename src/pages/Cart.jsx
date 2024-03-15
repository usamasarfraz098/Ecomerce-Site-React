import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const handleClick = (itemId) => {
        alert('Your Product is Deleted from Cart')
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleIncrement = (itemId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleDecrement = (itemId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div>
            <div className="front-page-color">
                <div className="container">
                    <Navbar />
                    <div className="front-page-color">
                        <div className="container mt-5">
                            {/* Display cart items */}
                            <div className="row">
                                <div className="col-8">
                                    {cartItems.map(item => (
                                        <div className="row bg-light mt-3 p-3" key={item.id}>
                                            <div className="col-6 my-3 d-flex">
                                                <div className="cart-product-img pe-3">
                                                    <img src={item.image} className='img-fluid' alt="" />
                                                </div>
                                                <div className="cart-product-data">
                                                    <div className="cart-product-data-title">{item.title}</div>
                                                    <div className="cart-product-data-price">RS: {item.price * item.quantity}</div>
                                                </div>
                                            </div>
                                            <div className="col-6 my-3 d-flex justify-content-end ps-5 ">
                                                <div className="product-increment pe-3">
                                                    <span onClick={() => handleDecrement(item.id)}><FontAwesomeIcon className='icon' icon={faMinus} /></span>
                                                    <span className='incremet-text h5'> {item.quantity}</span>
                                                    <span onClick={() => handleIncrement(item.id)}> <FontAwesomeIcon className='icon' icon={faPlus} /></span>
                                                </div>
                                                <div className="cart-product-data-price pe-3">RS: {item.price}</div>
                                                <div className="delete-select-product">
                                                    <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => handleClick(item.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-4">
                                    <div className="total-order-sumary-text h5 fw-bolder">
                                        Order Summary
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-6">
                                            Subtotal
                                        </div>
                                        <div className="col-6 total">
                                            RS: {calculateTotal()}
                                        </div>
                                    </div>
                                    <div className="delivery-time-text">
                                        Estimated Delivery
                                    </div>
                                    <div className="row py-1">
                                        <div className="col-6">
                                            Total
                                        </div>
                                        <div className="col-6">
                                            RS: {calculateTotal()}
                                        </div>
                                    </div>
                                    <button className="btn btn-dark">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
