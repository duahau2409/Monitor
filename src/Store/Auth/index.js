import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: { token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiQS0wNjFhMzg1NS04YjQ2LTQwYmUtYWNmOS0wNDJjNjgyYjdmYTYiLCJleHBpcmVkX3RpbWUiOjE2NjMwNTA5Nzk5NzcsImlhdCI6MTY2MTg1MDk3OSwiZXhwIjoxNjYzMDUwOTc5fQ.dyNj0ts2WoLCmpBtJ3UaXfk6uo7ZirNBjfvKT_MiYAiHRcGAwq-qthqwpiBEwqiHp-LXDf6Smx_8drl_vjVjqmLWO8mNnTMvD9w8zOKSMof0iHNOSq1m9Uivp3XLGL0-_KyTuVkP_uhc4islZhXjfMd2eQ1atMTXS9A9S-fwS7n1zXLLJe07sWGqlXj7oRYrWew4NPOOJkmQPf_Qm4UJFqZCMtARoUsvyiNFKMcFn_AFQRQLTUTUWumyxTrbdHDzRQmo8p7-T6gt3knTyUOJ05IOMtTTkXZdYTUe-3txJI8GR1xnkqxZ4-r8HyjEpLT0qB_OpmQorOmoD1uHMYUvUA', page: null },
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