import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/CartSlice'; // Usar un solo punto aquí

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;