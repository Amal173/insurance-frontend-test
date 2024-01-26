import { configureStore } from '@reduxjs/toolkit'
import insuranceReducer from '../Redux/Slice/InsuranceSlice'

export default configureStore({
    reducer: {
        insurance: insuranceReducer
    }
})