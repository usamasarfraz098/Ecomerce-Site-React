import React from 'react';
import { Link } from 'react-router-dom';

export const Products = ({ Product }) => {

    const handleCart = (activeProduct, redirect) => {
        alert(`Product has been added to your cart`);
        console.log(activeProduct);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === activeProduct.id);
        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === activeProduct.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...activeProduct, quantity: 1 }]));
        }
        if (redirect) {
        }
    };

    return (
        <div className="container">
            <div className="row">
                {Product.map(product => (
                    <div className="col-lg-6 mb-4" key={product.id}>
                        <div className="card h-100">
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} className="img-fluid object mt-2" alt={product.title} /> 
                            </Link>
                            <div className="card-body">
                                <p className="card-text">{product.title}</p>
                                <button className="btn btn-dark" onClick={() => handleCart(product, true)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
