import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navigateAndReset, navigateAndSimpleReset } from '@/Navigators/utils'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '@/Services/modules/LogIn'
import { updateAuth } from '@/Store/Auth'
import { setMessage, submitSuccess } from '@/Store/LogIn'
import { useEffect } from 'react'

const LogInButton = () => {
    const email = useSelector(state => state.login.email)
    const password = useSelector(state => state.login.password)
    const dispatch = useDispatch()
    const [login, { data, isLoading, isSuccess, error }] = useLoginMutation()
    const submit = () => {
        login({
            email,
            password,
            tfaCode: '111111'
        })
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(updateAuth(data.data.token.accessToken))
            dispatch(submitSuccess(data.msg))
            navigateAndSimpleReset('Welcome')
        }
    }, [isSuccess])
    useEffect(() => {
        if (isLoading) {
            dispatch(setMessage('Loading...'))
        }
        else {
            dispatch(setMessage(''))
        }
    }, [isLoading])

    useEffect(() => {
        if (error) {
            dispatch(setMessage(error.data.msg))
        }
    }, [error])
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#fff',
                width: '100%',
                padding: 15,
                marginVertical: 5,
                alignItems: 'center',
                borderRadius: 4
            }}
            onPress = {submit}
            >
            <Text
                style={{
                    fontWeight: 'bold',
                    color: 'black'
                }}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
    )
}

export default LogInButton

const styles = StyleSheet.create({})