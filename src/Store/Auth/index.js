import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
    initialState: { token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiQS0wNjFhMzg1NS04YjQ2LTQwYmUtYWNmOS0wNDJjNjgyYjdmYTYiLCJleHBpcmVkX3RpbWUiOjE2NjQxNTE1MDkwMjAsImlhdCI6MTY2Mjk1MTUwOSwiZXhwIjoxNjY0MTUxNTA5fQ.hb7LqpIdeLxHTLPnTduT69Chbp-Ga_A1j5te-8l9Zl3ZHr_2S4T-BFirKhhke2_HeS1VcD4T3HRnZXWx1dpetIc7Ft0ExiBwX0BpAU3XLSvgWPSvpyqwOlblByiZHKlhPl4-dg_dfyUneBw1snvihUNBjh_Jo6a9TH0Frivt8vYC351jfmCw5LGFEp_vw-q6-bpPegROXI7JwhDtmazfC73FNkezBmVzrRaTwqTnHyvCMSZVTXku6lSJ6b4tyCpkpXqL2J5vgfZ2Yd8IMCZBrf8H3UDDtaF4GpDrLOuXUreanOix6Ui39YiR3bux0UO-Th59hzl-Jx3cUngAXSKmfA', page: null },
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