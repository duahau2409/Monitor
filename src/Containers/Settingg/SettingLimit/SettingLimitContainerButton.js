import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { useUpdateMutation } from '@/Services/modules/Setting/Update'
import { useCreateMutation } from '@/Services/modules/Setting/Create'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAndSubmit, setMessage } from '@/Store/Setting/Litmit'

const SettingLimitContainerButton = () => {
    // const modifyAPI = 
    // ? useCreateMutation() : useUpdateMutation();
    const {data } = useRetrieveQuery()

    console.log(data, '--------------')

    // useEffect(() => {
    //     if (isSuccess) {
    //         const check = data === null ? useCreateMutation() : useUpdateMutation()
    //     }
    // const [setting, {data, isLoading, isSuccess, error}] = check()
    // }, [isSuccess])
    // const [settingLimit, { isLoading, isSuccess, error }] = data.data !== null ? useUpdateMutation() : useCreateMutation()
    const [settingLimit, {isLoading, isSuccess, error }] = useUpdateMutation()

    console.log('1',isSuccess, error, isLoading, '--------------')
    const store = useSelector(state => state.settingLimit)
    const dispatch = useDispatch()

    // console.log(data.data)
    const submit = () => {
        const entry = store.entry.trim() === ''
        const target = store.target.trim() === ''
        const stoploss = store.stoploss.trim() === ''
        const soldOut = store.soldOut.trim() === ''
        const buy = store.buy.trim() === ''
        if (entry && target && stoploss && soldOut && buy) {
            dispatch(setMessage('Không được để trống'))
        }
        else if (entry) {
            dispatch(setMessage('Không được để trống'))

        }
        else if (target) {
            dispatch(setMessage('Không được để trống'))

        }
        else if (stoploss) {
            dispatch(setMessage('Không được để trống'))

        }
        else if (soldOut) {
            dispatch(setMessage('Không được để trống'))

        }
        else if (buy) {
            dispatch(setMessage('Không được để trống'))
        }
        else {
            console.log('abc')
            settingLimit({
                entry: store.entry,
                target: store.target,
                stoploss: store.stoploss,
                soldOut: store.soldOut,
                buy: store.buy,
            })
        }
    }


    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#1B1B1B',
                width: '60%',
                paddingTop: 6,
                paddingBottom: 7,
                marginVertical: 5,
                alignItems: 'center',
                borderRadius: 4,

            }}
            onPress={submit}
        >
            <Text
                style={{
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 14.52,
                    color: '#ffff'
                }}>Cập Nhật</Text>
        </TouchableOpacity>
    )
}

export default SettingLimitContainerButton

const styles = StyleSheet.create({})