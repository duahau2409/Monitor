import { StyleSheet, Text, View, Button, Modal, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LimitContainerTable from './LimitContainerTable'
import LimitContainerResult from './LimitContainerResult'
import LimitContainerNotPlay from './LimitContainerNotPlay'
import LimitContainerPlay from './LimitContainerPlay'
import LimitHeaderText from './LimitHeaderText'
import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import {
  useAccountSignalQuery,
  useNotInJobQuery,
} from '@/Services/modules/Maket'
import { useMemo } from 'react'
import { handleDataByStatus } from '@/Util'
import { useSelector } from 'react-redux'
import SellAll from './SellAll'
import { Controller, useForm } from 'react-hook-form'

// console.log(DateTimePickerAndroid)
const Limit = (inputName, locale, labelKey, max, min) => {
  const date = useSelector(state => state.maket.date)
  //   const graph = useSelector(state =>state.maket.graph)
  //   const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
  //   const { data: dataNotJob, isFetching: fetch2, isLoading: load2, refetch: refetch2 } = useNotInJobQuery(date)

  //   const job = useMemo(() => {
  //     if (dataJob)
  //       return handleDataByStatus(dataJob.data, 'job', date)
  //     return null
  //   }, [dataJob])

  //   const notJob = useMemo(() => {
  //     if (dataNotJob)
  //       return handleDataByStatus(dataNotJob.data, 'notJob', date)
  //     return null
  //   }, [dataNotJob])

  //   const dataWin = useMemo(() => {
  //       const data = job ? job.WIN : []
  //       return data.reduce((pre, item) =>
  //         pre + (item.sellPrice / item.entry1)*item.sellAmount-item.sellAmount
  //       , 0)
  //   })

  //   const dataLose = useMemo(() => {
  //     const data = job ? job.LOSE : []
  //     return data.reduce((pre, item) =>
  //       pre + (item.sellPrice / item.entry1)*item.sellAmount-item.sellAmount
  //     , 0)
  // })

  // const total = dataWin + dataLose

  // console.log(total, '------------------')

  // const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };
  //   return (
  //     <View>
  //       <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
  //         <LimitHeaderText />
  //         <LimitContainerPlay />
  //         <LimitContainerNotPlay />
  //         <LimitContainerResult />
  //       </View>
  //       <View>
  //         <LimitContainerTable job={job} notJob = {notJob}/>
  //       </View>
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={graph === 'SELECT_AC' ? true : false}
  //         onRequestClose={() => {
  //           dispatch(changeGraph(null))
  //         }}
  //       >
  //         <SellAll total={total}/>
  //       </Modal>
  //     </View>

  // //     <View>
  // //       <Button title="Show Date Picker" onPress={showDatePicker} />
  // //       <DateTimePickerModal
  // //         isVisible={isDatePickerVisible}
  // //         mode="date"
  // //         onConfirm={handleConfirm}
  // //         onCancel={hideDatePicker}
  // //       />
  // //     </View>
  //   )
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date)
    hideDatePicker()
  }

  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View
        style={{
          margin: 24,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Đăng nhập
        </Text>

        <Controller
          control={control}
          rules={{
            require: true,
            minLength: 1,
            maxLength: 20,
          }}
          render={({ field: { onBlur, value, onChange } }) => (
            <View
              style={{
                backgroundColor: '#0000',
                borderWidth: 1,
                borderColor: '#9E9E9E',
                borderRadius: 4,
                height: 27,
                justifyContent: 'center',
                marginBottom: 10,
              }}
            >
              {/* // field */}
              <TextInput
                style={{
                  padding: 5,
                  marginLeft: 10,
                  color: '#1B1B1B',
                }}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                // {...field}
              />
            </View>
          )}
          name="account"
        />
        {/* {errors.entry && (
          <Text style={{ color: 'red' }}>This is required.</Text>
        )} */}
      </View>
      <View
        style={{
          margin: 24,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Mật khẩu
        </Text>

        <Controller
          control={control}
          rules={{
            require: true,
            minLength: 1,
            maxLength: 20,
            pattern: /[A-Za-z]{3}/,
          }}
          render={({ field: { onBlur, value, onChange } }) => (
            <View
              style={{
                backgroundColor: '#0000',
                borderWidth: 1,
                borderColor: '#9E9E9E',
                borderRadius: 4,
                height: 27,
                justifyContent: 'center',
                marginBottom: 10,
              }}
            >
              {/* // field */}
              <TextInput
                style={{
                  padding: 5,
                  marginLeft: 10,
                  color: '#1B1B1B',
                }}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                // {...field}
              />
            </View>
          )}
          name="password"
        />
        {/* {errors.entry && (
          <Text style={{ color: 'red' }}>This is required.</Text>
        )} */}
      </View>
      <View
        style={{
          paddingBottom: 7,
          borderWidth: 1,
          borderColor: '#E9E9E9',
          padding: 12,
          paddingTop: 9,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
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
          onPress={handleSubmit(onSubmit)}
        >
          <Text
            style={{
              fontWeight: '400',
              fontSize: 12,
              lineHeight: 14.52,
              color: '#ffff',
            }}
          >
            Cập Nhật
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Limit

const styles = StyleSheet.create({})
