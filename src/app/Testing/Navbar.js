import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemRenderer from './ItemRenderer';
import { addAmount, clearCart } from '../../features/cart/cartSlice';

export default function Navbar() {
    const amount = useSelector((store) => store.cart.amount);
    const dispatch = useDispatch();
    return (
        <div>
            <div>amount:{amount}</div>
            <ItemRenderer />
            <button onClick={()=>dispatch(clearCart())}>clear cart</button>
            <button onClick={()=>dispatch(addAmount(5))}>Add 5</button>
        </div>
    )
}
