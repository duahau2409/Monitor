import { api } from '@/Services/api'
export const createAPI = api.injectEndpoints({
    endpoints: build => ({
        create: build.mutation({
            query: (body) => ({
                url: '/admin/job-setting/create',
                method: 'POST',
                body 
            }),
        })
    }),
    overrideExisting: true,
})

export const { useCreateMutation } =  createAPI
