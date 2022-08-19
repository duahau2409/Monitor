import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useInfoQuery } from '@/Services/modules/users'
import { useEffect } from 'react'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const Welcome = () => {
    const { data, isSuccess, error } = useInfoQuery()

    useEffect(() => {
        if (isSuccess) {
            console.log(data.data , ' --- info')
            navigateAndSimpleReset('Main')
        }
    }, [isSuccess])

    useEffect(() => {
        if (error) {
            console.log('error')
            navigateAndSimpleReset('LogIn')
        }
    }, [error])
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome