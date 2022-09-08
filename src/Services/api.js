import { Config } from '../Config'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ 
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, {getState}) => {
    
    // const token = getState().auth.token
    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }
    headers.set('authorization', `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiQS0wNjFhMzg1NS04YjQ2LTQwYmUtYWNmOS0wNDJjNjgyYjdmYTYiLCJleHBpcmVkX3RpbWUiOjE2NjMwNTA5Nzk5NzcsImlhdCI6MTY2MTg1MDk3OSwiZXhwIjoxNjYzMDUwOTc5fQ.dyNj0ts2WoLCmpBtJ3UaXfk6uo7ZirNBjfvKT_MiYAiHRcGAwq-qthqwpiBEwqiHp-LXDf6Smx_8drl_vjVjqmLWO8mNnTMvD9w8zOKSMof0iHNOSq1m9Uivp3XLGL0-_KyTuVkP_uhc4islZhXjfMd2eQ1atMTXS9A9S-fwS7n1zXLLJe07sWGqlXj7oRYrWew4NPOOJkmQPf_Qm4UJFqZCMtARoUsvyiNFKMcFn_AFQRQLTUTUWumyxTrbdHDzRQmo8p7-T6gt3knTyUOJ05IOMtTTkXZdYTUe-3txJI8GR1xnkqxZ4-r8HyjEpLT0qB_OpmQorOmoD1uHMYUvUA`)
    return headers
  } 
})

const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
  }
  return result
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
})
