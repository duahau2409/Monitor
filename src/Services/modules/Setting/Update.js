import { api } from '@/Services/api'
export const updateApi = api.injectEndpoints({
    endpoints: build => ({
        update: build.mutation({
            query: (body) => ({
                url: '/admin/job-setting/update',
                method: 'PUT',
                body 
            }),
        })

    }),
    overrideExisting: true,
})

export const { useUpdateMutation } = updateApi
