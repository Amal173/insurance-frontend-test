import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


const initialState = {

    insurance: [],
    insuranceType: [],
    ShowCustomerDetailsForm: false,
    ShowChangeStatusModal: false,
    ShowUpdateWarningModal: false,

};



export const createInsurance = createAsyncThunk('user/createInsurance', async (data) => {

    const response = await axios.post(`http://localhost:3030/insurance`, data);
    console.log("response data post insurance form", response);
    return response.data;
});


export const updateInsuranceStatus = createAsyncThunk('user/updateInsuranceStatus', async ({ id, status }) => {

    const response = await axios.put(`http://localhost:3030/insurance/${id}`, { status });
    console.log("response data post insurance form", response);
    return response.data;
});


export const getInsurance = createAsyncThunk('user/getInsurance', async ({ query }) => {

    const response = await axios.get(`http://localhost:3030/insurance?search=${query}`);
    console.log("response data get insurance", response);
    return response.data;
});


export const getInsuranceType = createAsyncThunk('user/getInsuranceType', async () => {

    const response = await axios.get(`http://localhost:3030/insuranceType`);
    console.log("response data get insurance type", response);
    return response.data;
});


export const insuranceSlice = createSlice({
    name: 'insurance',
    initialState,
    reducers: {
        dispalyForm: (state, { payload }) => {
            state.ShowCustomerDetailsForm = payload
        },
        dispalyChangeStatusModal: (state, { payload }) => {
            state.ShowChangeStatusModal = payload
        },
        displayUpdateWarningModal: (state, { payload }) => {
            state.ShowUpdateWarningModal = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getInsurance.fulfilled, (state, { payload }) => {
            state.insurance = payload
        });
        builder.addCase(getInsuranceType.fulfilled, (state, { payload }) => {
            state.insuranceType = payload
        });
    },
})


export const { dispalyForm, dispalyChangeStatusModal, displayUpdateWarningModal } = insuranceSlice.actions
export default insuranceSlice.reducer