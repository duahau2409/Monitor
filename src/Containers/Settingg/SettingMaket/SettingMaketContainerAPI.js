import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const APITitles = [
  { name: "API key" },
  { name: "API secret" },
]
const SettingMaketContainerAPI = () => {
  return (
    <View
        style={{
            width: '100%',
            backgroundColor: '#F3F3F3',
            height: 150,
            padding: 5,
            borderRadius: 4
        }}>
        {
            APITitles.map((APITitle, index) => (
                <View 
                style = {{ padding: 5}}
                key={index}>
                    <Text
                        style={{
                            fontSize: 14,
                            lineHeight: 16.94,
                            color: '#1B1B1B',
                            marginBottom: 5
                        }}>{APITitle.name}</Text>
                    <ContainerInput />
                </View>
            ))
        }
    </View>
)
}

export default SettingMaketContainerAPI

const ContainerInput = () => (
  <View
      style={{
          backgroundColor: "#0000",
          borderWidth: 1,
          borderColor: '#9E9E9E',
          borderRadius: 4,
          height: 27,
          justifyContent: 'center',
          borderRadius: 4,
          marginBottom: 10
      }}>
      <TextInput
          style={{
              marginLeft: 10,
              color: '#1B1B1B',
              padding: 5
          }}
      />
  </View>
)