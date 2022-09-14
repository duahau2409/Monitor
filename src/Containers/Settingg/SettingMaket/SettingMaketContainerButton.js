import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { useCreateMutation } from '@/Services/modules/Setting/Create'
import { useUpdateMutation } from '@/Services/modules/Setting/Update'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '@/Store/Setting/Maket'

const SettingMaketContainerButton = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.settingMaket)
  const { data: dataSettingMaket } = useRetrieveQuery()
  const [settingMaket, { data, isLoading, isSuccess, error }] = dataSettingMaket.data === null ? useCreateMutation() : useUpdateMutation()


  console.log(dataSettingMaket.data, '123---ndhjs')
  const submit = () => {
    const upTime = store.upTime.trim() === ''
    const upBalance = store.upBalance.trim() === ''
    const downTime = store.downTime.trim() === ''
    const downBalance = store.downBalance.trim() === ''
    if (upTime && upBalance && downTime && downBalance) {
        dispatch(setMessage('Không được để trống'))
    }
    else if (upTime) {
        dispatch(setMessage('Không được để trống'))

    }
    else if (upBalance) {
        dispatch(setMessage('Không được để trống'))

    }
    else if (downTime) {
        dispatch(setMessage('Không được để trống'))

    }
    else if (downBalance) {
        dispatch(setMessage('Không được để trống'))

    }
    else {
        console.log('abc')
        settingMaket({
          upTime: store.upTime,
          upBalance: store.upBalance,
          downTime: store.downTime,
          downBalance: store.downBalance,
        })
    }
}

  console.log('1', isSuccess, '2', isLoading, '3', error)
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

export default SettingMaketContainerButton

const styles = StyleSheet.create({})