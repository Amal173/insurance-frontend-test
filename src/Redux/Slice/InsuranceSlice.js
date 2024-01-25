import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
 insurance:[]
};




export const createInsurance = createAsyncThunk('user/createInsurance', async (data) => {
    console.log(data);
    const response = await axios.post(`http://localhost:3030/insurance`,data);
    console.log("response data post insurance form", response);
    return response.data;
});

export const getInsurance = createAsyncThunk('user/getInsurance', async () => {
    const response = await axios.get(`http://localhost:3030/insurance`);
    console.log("response data get insurance", response);
    return response.data;
});


export const insuranceSlice = createSlice({
    name: 'insurance',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getInsurance.fulfilled, (state,{payload}) => {
            state.insurance=payload
        });
    },
})

export default insuranceSlice.reducer