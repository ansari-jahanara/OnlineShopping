import { configureStore} from '@reduxjs/toolkit'
import cartReducer from './Cart/CartSlice'
import productReducer from './Product/ProductSlice'
const store = configureStore({
    reducer:{
        cart : cartReducer,
        products : productReducer
    }
})
export default store