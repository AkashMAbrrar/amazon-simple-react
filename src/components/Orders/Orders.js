import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [cart, setCart] = useCart();
    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }
    return (
        <div className='shop-container'>
            <div className="review-products-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        <button>Porceed Shipment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;