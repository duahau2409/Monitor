import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'settingMaket',
    initialState: {
        upTime: '',
        upBalance: '',
        downTime: '',
        downBalance: '',
        aPIKey: '',
        aPISecret: '',
        isSecurity: true,
        message: '',
    },
    reducers: {
        changeUpTime: (state, { payload }) => {
            state.upTime = payload
            state.message = ''
        },
        changeUpBalance: (state, { payload }) => {
            state.upBalance = payload
            state.message = ''
        },
        changeDownTime: (state, { payload }) => {
            state.downTime = payload
            state.message = ''
        },
        changeDownBalance: (state, { payload }) => {
            state.downBalance = payload
            state.message = ''
        },
        changeAPIKey: (state, { payload }) => {
            state.aPIKey = payload
            state.message = ''
        },
        changeAPISecret: (state, { payload }) => {
            state.aPISecret = payload
            state.message = ''
        },
        toggleIsSecurity: (state) => {
            state.isSecurity = !state.isSecurity
        },
        // checkAndSubmit: (state) => {
        //     const emailEmpty = state.email.trim() === ''
        //     const passwordEmpty = state.password.trim() === ''
        //     if (emailEmpty && passwordEmpty) {
        //         state.message = 'Email và password không được để trống'
        //     }
        //     else if (emailEmpty) {
        //         state.message = 'Email không được để trống'
        //     }
        //     else if (passwordEmpty) {
        //         state.message = 'Password không được để trống'
        //     }
        //     else {
        //     }
        // },
        setMessage: (state, { payload }) => {
            state.message = payload
        },
        submitSuccess: (state, {payload})=>{
            state.message=payload
            state.timeIncrease=''
            state.priceIncrease=''
            state.timeDecrease=''
            state.priceIncrease=''
            state.aPIKey=''
            state.aPISecret=''
        }
    },
})

export const {
    changeUpTime,
    changeUpBalance,
    changeDownTime,
    changeDownBalance,
    changeAPIKey,
    changeAPISecret,
    submitSuccess,
    setMessage,
    toggleIsSecurity
} = slice.actions

export default slice.reducer