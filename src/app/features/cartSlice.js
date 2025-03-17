
import { createSlice } from "@reduxjs/toolkit";
import desserts from '../../data';

const savecart = JSON.parse(localStorage.getItem('cart')) || {
    selectedDesserts: [],
    totalPrice: 0,
    totalAmount: 0,

}
const updateLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify({
        selectedDesserts: state.selectedDesserts,
        totalPrice: state.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0),
        totalAmount: state.selectedDesserts.reduce((sum, item) => sum + item.amount, 0)
    }));
};

const initialState = {
    desserts,
    selectedDesserts: savecart.selectedDesserts,
    totalPrice: savecart.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0),
    totalAmount: savecart.selectedDesserts.reduce((sum, item) => sum + item.amount, 0)
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, { payload }) => {
            const existingItem = state.selectedDesserts.find(item => item.id == payload.id);
            if (existingItem) {
                existingItem.amount += 1;
            } else {
                state.selectedDesserts.push({ ...payload, amount: 1 });
            }
            state.totalPrice = state.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0);
            state.totalAmount = state.selectedDesserts.reduce((sum, item) => sum + item.amount, 0);

            updateLocalStorage(state);
        },

        increaseQuantity: (state, { payload }) => {
            const item = state.selectedDesserts.find(item => item.id == payload);
            if (item) {
                item.amount += 1;
            }
            state.totalPrice = state.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0);
            state.totalAmount = state.selectedDesserts.reduce((sum, item) => sum + item.amount, 0);

            updateLocalStorage(state);
        },

        decreaseQuantity: (state, { payload }) => {
            const item = state.selectedDesserts.find(item => item.id == payload);
            if (item && item.amount > 1) {
                item.amount -= 1;
            } else {
                state.selectedDesserts = state.selectedDesserts.filter(item => item.id != payload);
            }
            state.totalPrice = state.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0);
            state.totalAmount = state.selectedDesserts.reduce((sum, item) => sum + item.amount, 0);

            updateLocalStorage(state);
        },

        removeFromCart: (state, { payload }) => {
            state.selectedDesserts = state.selectedDesserts.filter(item => item.id != payload);
            state.totalPrice = state.selectedDesserts.reduce((sum, item) => sum + item.amount * item.price, 0);
            state.totalAmount = state.selectedDesserts.reduce((sum, item) => sum + item.amount, 0);

            updateLocalStorage(state);
        },

        resetCart: (state) => {
            state.selectedDesserts = [];
            state.totalPrice = 0;
            state.totalAmount = 0;
            
            updateLocalStorage(state)
        },
    },
});

export const { addTocart, decreaseQuantity, increaseQuantity, resetCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
