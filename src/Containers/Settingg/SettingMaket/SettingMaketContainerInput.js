import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
const nameTitles = [
  {
      name: "Thời gian tăng",
      unit: 'Giây'
  },
  {
      name: "Số tiền tăng",
      unit: 'VND'
  },
  {
      name: "Thời gian giảm",
      unit: 'Giây'
  },
  {
      name: "Số tiền tăng",
      unit: 'VND'
  }
]
const SettingMaketContainerInput = () => {
  const [isSelected, setSelection] = useState(false);
  return (
      <View style={{marginBottom: 8}}>
          {
              nameTitles.map((nameTitle, index) => (
                  <View 
                  key={index}
                  >
                      <Text
                          style={{
                              position: 'absolute',
                              right: 6,
                              top:22,
                              fontWeight: "400",
                              fontSize: 16,
                              lineHeight: 14.25,
                              color: '#9E9E9E',
                              padding: 6,
                              borderLeftWidth: 1,
                              borderColor: '#9E9E9E',
                          }}
                      >{nameTitle.unit}</Text>
                      <Text
                          style={{
                              fontSize: 14,
                              lineHeight: 16.94,
                              color: '#1B1B1B',
                              marginBottom: 5
                          }}>{nameTitle.name}</Text>
                      <ContainerInput />
                  </View>
              ))
          }
      </View>
  )
}

export default SettingMaketContainerInput

const ContainerInput = () => (
  <View
      style={{
          backgroundColor: "#0000",
          borderWidth: 1,
          borderColor: '#9E9E9E',
          borderRadius: 4,
          height: 27,
          justifyContent: 'center',
          marginBottom: 10,
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