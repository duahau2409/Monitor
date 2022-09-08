import { api } from '@/Services/api'

export const sellAllApi = api.injectEndpoints({
    endpoints: build => ({
        sellAll: build.mutation({
            query: (body) => ({
                url: 'admin/account-signal/sell-all',
                method: 'POST',
                body
            }),
        })
    }),
    overrideExisting: true,
})

export const { useSellAllMutation } = sellAllApi