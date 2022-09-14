import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { useUpdateMutation } from '@/Services/modules/Setting/Update'
import { useCreateMutation } from '@/Services/modules/Setting/Create'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkAndSubmit, setMessage } from '@/Store/Setting/Litmit'
import { useForm } from 'react-hook-form'

const SettingLimitContainerButton = () => {



    console.log('1',isSuccess, error, isLoading, '--------------')
    const store = useSelector(state => state.settingLimit)
    

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
        <></>
    )
}

export default SettingLimitContainerButton

const styles = StyleSheet.create({})