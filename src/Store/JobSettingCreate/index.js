import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'create',
    initialState: {
        timeIncrease: '',
        priceIncrease: '',
        timeDecrease : '',
        priceDecrease: '',
        entry: '',
        target: '',
        stoploss: '',
        soldOut: '',
        buy: '', 
        message: '',
    },
    reducers: {
        changeTimeIncrease: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceIncrease: (state, { payload }) => {
            state.priceIncrease = payload
            state.message = ''
        },
        changeTimeDecrease: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceDecrease: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },

        changePriceEntry: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceTarget: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceStoploss: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceSoldOut: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        changePriceBuy: (state, { payload }) => {
            state.timeIncrease = payload
            state.message = ''
        },
        checkAndSubmit: (state) => {
            const emailEmpty = state.email.trim() === ''
            const passwordEmpty = state.password.trim() === ''
            if (emailEmpty && passwordEmpty) {
                state.message = 'Email và password không được để trống'
            }
            else if (emailEmpty) {
                state.message = 'Email không được để trống'
            }
            else if (passwordEmpty) {
                state.message = 'Password không được để trống'
            }
            else {
            }
        },
        setMessage: (state, { payload }) => {
            state.message = payload
        },
        submitSuccess: (state, {payload})=>{
            state.message=payload
            state.timeIncrease=''
            state.priceIncrease=''
            state.timeDecrease=''
            state.priceDecrease=''
        }
    },
})

export const {
    changeTimeIncrease,
    changePriceIncrease,
    changeTimeDecrease,
    changePriceDecrease,
    setMessage,
    submitSuccess
} = slice.actions

export default slice.reducer