import React from 'react'
import { useSelector } from 'react-redux';

export default function ItemRenderer() {
    const cartItems = useSelector((store) => store.cart.cartItems);

    return (
        <div>
            {!cartItems.length && <h1>Cart empty</h1>}
            {cartItems.map((item) => {
                return <div key={item.id}>{item.name}</div>
            })}
        </div>
    )
}
