import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import listMarketCap from './listMarketCap'
import retrieve from './retrieve'
import history from './history'
import { api } from '@/Services/api'

const listMarketCapApi  = api.injectEndpoints({
    endpoints: build => ({
        listMarketCap: listMarketCap(build),
        retrieve: retrieve(build),
        // notInJob: notInJob(build),
        // accountSignal: accountSignal(build),
        history: history(build)
    }),
    overrideExisting: false,
})

export const { 
    useListMarketCapQuery,
    useRetrieveQuery,
    // useNotInJobQuery,
    // useAccountSignalQuery, hỏi sau
    useHistoryQuery
 } = listMarketCapApi