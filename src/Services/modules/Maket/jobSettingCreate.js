import { api } from '@/Services/api'
export const createAPI = api.injectEndpoints({
    endpoints: build => ({
        create: build.mutation({
            query: (body) => ({
                url: '/admin/job-setting/create',
                method: 'POST',
                body //{email: "user0002@gmail.com", password: "Hh223344@", tfaCode: "111111"}
            }),
        })
    }),
    overrideExisting: true,
})

export const { useCreateMutation } =  createAPI
