import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'settingLimit',
    initialState: {
        entry: '',
        target: '',
        stoploss: '',
        soldOut: '',
        buy: '',
        message: '',
    },
    reducers: {
        changeEntry: (state, { payload }) => {
            state.entry = payload
            state.message = ''
        },
        changeTarget: (state, { payload }) => {
            state.target = payload
            state.message = ''
        },
        changeStoploss: (state, { payload }) => {
            state.stoploss = payload
            state.message = ''
        },
        changeSoldOut: (state, { payload }) => {
            state.soldOut = payload
            state.message = ''
        },
        changeBuy: (state, { payload }) => {
            state.buy = payload
            state.message = ''
        },

        
        // changeAPISecret: (state, { payload }) => {
        //     state.aPISecret = payload
        //     state.message = ''
        // },
        // toggleIsSecurity: (state) => {
        //     state.isSecurity = !state.isSecurity
        // },
        // checkAndSubmit: (state) => {
        //     const entry = state.entry.trim() === ''    
        // },
        setMessage: (state, { payload }) => {
            state.message = payload
        },
        submitSuccess: (state, {payload})=>{
            state.message=payload
            state.entry=''
            state.target=''
            state.stoploss=''
            state.soldOut=''
            state.buy=''
        }
    },
})

export const {
changeEntry,
changeTarget,
changeStoploss,
changeSoldOut,
changeBuy,
setMessage,
checkAndSubmit,
submitSuccess
} = slice.actions

export default slice.reducer