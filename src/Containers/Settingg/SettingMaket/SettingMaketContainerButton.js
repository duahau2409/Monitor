import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { useCreateMutation } from '@/Services/modules/Setting/Create'
import { useUpdateMutation } from '@/Services/modules/Setting/Update'

const SettingMaketContainerButton = () => {
  // const [setting, { data, isLoading, isSuccess, error }] = useRetrieveQuery() === null ? useCreateMutation() : useUpdateMutation()
  // const submit = () => {
  //   setting({
  //     timeIncrease,
  //     priceIncrease,
  //     timeDecrease,
  //     priceDecrease,
  //   })
  // }
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
      // onPress={submit}
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