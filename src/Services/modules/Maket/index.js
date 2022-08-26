import { api } from '@/Services/api'
import listMarketCap from './listMarketCap'
import retrieve from './retrieve'
import notInJob from './notInJob'
import accountSignal from './accountSignal'
import history from './history'
import sellAll from './sellAll'

const listMarketCapAPI = api.injectEndpoints({
    endpoints: build => ({
        listMarketCap: listMarketCap(build),
        retrieve: retrieve(build),
        notInJob: notInJob(build),
        accountSignal: accountSignal(build),
        history: history(build),
        sellAll: sellAll(build),
    }),
    overrideExisting: false,
})

export const { 
    useListMarketCapQuery,
    useRetrieveQuery,
    useNotInJobQuery,
    useAccountSignalQuery,
    useHistoryQuery,
    useSellAllQuery,
 } = listMarketCapAPI