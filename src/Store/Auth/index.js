import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: { token: null, page: null },
    reducers: {
      resetAuth: (state) => {
        state.token = null
        state.page = null
      },
      setPage: (state, { payload }) => {
        state.page = payload
      },
      updateAuth: (state, {payload}) =>{
        state.token=payload
      }
    },
})

export const { setPage, resetAuth, updateAuth } = slice.actions

export default slice.reducer