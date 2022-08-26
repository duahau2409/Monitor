import { api } from '@/Services/api'
export const updateApi = api.injectEndpoints({
    endpoints: build => ({
        update: build.mutation({
            query: (body) => ({
                url: '/admin/job-setting/update',
                method: 'PUT',
                body //{email: "user0002@gmail.com", password: "Hh223344@", tfaCode: "111111"}
            }),
        })
    }),
    overrideExisting: true,
})

export const { useUpdateMutation } = updateApi
