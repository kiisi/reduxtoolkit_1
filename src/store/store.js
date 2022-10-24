import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cardSlice'
import productSlice from './productSlice'


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer
    }
})

export default store