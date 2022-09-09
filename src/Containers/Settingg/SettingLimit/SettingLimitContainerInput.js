import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeBuy, changeEntry, changeSoldOut, changeStoploss, changeTarget, setMessage } from '@/Store/Setting/Litmit'
import Message from './Message'
import { useRetrieveQuery } from '@/Services/modules/Maket'
import { Controller, useForm } from 'react-hook-form'

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
  const dispatch = useDispatch()
  const entry = useSelector(state => state.settingLimit.entry)
  const target = useSelector(state => state.settingLimit.target)
  const stoploss = useSelector(state => state.settingLimit.stoploss)
  const soldOut = useSelector(state => state.settingLimit.soldOut)
  const buy = useSelector(state => state.settingLimit.buy)
  const { data } = useRetrieveQuery()

  const { control } = useForm({
    defaultValues: {
      entry: data.data.entry + '',
      target: data.data.target + '',
      stoploss: data.data.stoploss + '',
      soldOut: data.data.soldOut + '',
      buy: data.data.buy + '',
    }
  })

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
            marginBottom: 5
          }}>Entry</Text>
        <View
          style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <Controller
            name="entry"
            control={control}
            render={({ }) => (
              // field 
              <TextInput
                style={{
                  padding: 5,
                  marginLeft: 10,
                  color: '#1B1B1B',
                }}
                value={entry}
                onChangeText={text => dispatch(changeEntry(text))}
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
            marginBottom: 5
          }}>Target</Text>
        <View
          style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <Controller
            name="target"
            control={control}
            render={({  }) => (
              // field
              <TextInput
                style={{
                  marginLeft: 10,
                  color: '#1B1B1B',
                  padding: 5,

                }}
                value={target}
                onChangeText={text => dispatch(changeTarget(text))}
                // {...field}
              />
            )
            } />
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 16.94,
            color: '#1B1B1B',
            marginBottom: 5
          }}>Stoploss</Text>
        <View
          style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,

            }}
            value={stoploss}
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
            marginBottom: 5
          }}>Sold out</Text>
        <View
          style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,

            }}
            value={soldOut}
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
            marginBottom: 5
          }}>Buy</Text>
        <View
          style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10
          }}>
          <TextInput
            style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5,
            }}
            value={buy}
            onChangeText={text => dispatch(changeBuy(text))}
          />
        </View>
      </View>
      {/* )
            )
          } */}
    </View>
  )
}

export default SettingLimitContainerInput

const styles = StyleSheet.create({})