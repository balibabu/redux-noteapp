import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [{ id: 1, name: 'phone' }, { id: 2, name: 'laptop' }],
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        addAmount: (state, action) => {
            // const passedValue=action.payload;
            const amountToAdd = action.payload;
            state.amount += amountToAdd;
        }
    },
});

export const { clearCart, addAmount } = cartSlice.actions;
export default cartSlice.reducer;