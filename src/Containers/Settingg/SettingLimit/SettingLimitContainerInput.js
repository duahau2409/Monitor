import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeBuy,
  changeEntry,
  changeSoldOut,
  changeStoploss,
  changeTarget,
  setMessage,
} from '@/Store/Setting/Litmit'
import Message from './Message'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { Controller, useForm } from 'react-hook-form'
import { en } from '@/Translations/resources'
import * as yup from 'yup'
import { useCreateMutation } from '@/Services/modules/Setting/Create'
import { useUpdateMutation } from '@/Services/modules/Setting/Update'

// const nameLimits = [
//   {
//     name: "Entry",
//   },
//   {
//     name: "Target",
//   },
//   {
//     name: "Stoploss",
//   },
//   {
//     name: "Sold out",
//   },
//   {
//     name: "Buy",
//   }
// ]

const SettingLimitContainerInput = () => {
  const { data } = useRetrieveQuery()
  const [settingLimit, {isLoading, isSuccess, error }] = data.data === null ? useCreateMutation() : useUpdateMutation()
  const dispatch = useDispatch()
  const store = useSelector(state => state.settingLimit)
  console.log('1 ', isSuccess, ' 2 ', isLoading, ' 3 ', error)
  console.log(data)
  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      entry: '',
      target: '',
      stoploss: '',
      soldOut: '',
      buy: '',
    },
  })
  console.log(errors, 'errors')
  const submit = () => {
    settingLimit({
      entry: store.entry,
      target: store.target,
      stoploss: store.stoploss,
      soldOut: store.soldOut,
      buy: store.buy,
  })
  }
  const onSubmit = data => console.log(data);
  return (
    <View>
      {/* {
            nameLimits.map((nameLimit, index) => ( */}
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Entry
        </Text>

        <Controller
          control={control}
          rules={{ 
            require: true,
            minLength: 1, 
            maxLength: 20,
            pattern:
            /[A-Za-z]{3}/, 
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
          name="entry"
        />
        {errors.entry && <Text style={{color:'red'}}>This is required.</Text>}
      </View>
      
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Target
        </Text>
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
          <Controller
            name="target"
            control={control}
            render={({}) => (
              // field
              <TextInput
                style={{
                  marginLeft: 10,
                  color: '#1B1B1B',
                  padding: 5,
                }}
                value={store.target}
                onChangeText={text => dispatch(changeTarget(text))}
                // {...field}
              />
            )}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Stoploss
        </Text>
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
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,
            }}
            value={store.stoploss}
            onChangeText={text => dispatch(changeStoploss(text))}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Sold out
        </Text>
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
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,
            }}
            value={store.soldOut}
            onChangeText={text => dispatch(changeSoldOut(text))}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5,
          }}
        >
          Buy
        </Text>
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
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,
            }}
            value={store.buy}
            onChangeText={text => dispatch(changeBuy(text))}
          />
        </View>
      </View>
      {/* )
            )
          } */}
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
          onPress={handleSubmit(submit)}
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

export default SettingLimitContainerInput

const styles = StyleSheet.create({})
