import { createSlice } from "@reduxjs/toolkit";

const currentDate = new Date().toISOString().slice(0, 10)
// const getDataJob = (data, status, date) => {
//     return data.filter(item => {
//         return new Date(item.createdAt).getDate() === new Date(date).getDate()
//     }).filter(item =>
//         item.status === status)
// }

// const getDataNotJob = (data, status, date) => {
//     return data.filter(item => {
//         return new Date(item.createdTime).getDate() === new Date(date).getDate()
//     }).filter(item =>
//         item.status === status)
// } util có filter chung rồi
const slice = createSlice({
    name: 'maket',
    initialState: {
        graph: null,
        date: currentDate,
        job: null,
        notJob: null
    }, // MARKET_CAP, BET, NO_BET
    reducers: {
        changeGraph: (state, { payload }) => {
            state.graph = payload
        },
        changeDate: (state, { payload }) => {
            state.date = new Date(payload).toISOString().slice(0, 10)
        },
    }
})

export const { changeGraph, changeDate } = slice.actions

export default slice.reducer