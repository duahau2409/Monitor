import { api } from '@/Services/api'
import fetchOne from './fetchOne'
import info from './info'

export const userApi = api.injectEndpoints({
  // endpoints: build => ({
  //   fetchOne: fetchOne(build),
  // }),
  // overrideExisting: false,
  endpoints: build => ({
    info: info(build),
  }),
  overrideExisting: true,
})

// export const { useLazyFetchOneQuery } = userApi
export const { useInfoQuery } = userApi
