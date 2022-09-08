import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'settingMaket',
    initialState: {
        timeIncrease: '',
        priceIncrease: '',
        timeDecrease: '',
        priceDecrease: '',
        aPIKey: '',
        aPISecret: '',
        isSecurity: true,
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
            state.timeDecrease = payload
            state.message = ''
        },
        changePriceDecrease: (state, { payload }) => {
            state.priceDecrease = payload
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
    changeTimeIncrease,
    changePriceIncrease,
    changeTimeDecrease,
    changePriceDecrease,
    changeAPIKey,
    changeAPISecret,
    submitSuccess,
    setMessage,
    toggleIsSecurity
} = slice.actions

export default slice.reducer