import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const nameLimits = [
    {
      name: "Entry",
    },
    {
      name: "Target",
    },
    {
      name: "Stoploss",
    },
    {
      name: "Sold out",
    },
    {
      name: "Buy",
    }
]
const SettingLimitContainerInput = () => {
    return (
        <View>
          {
            nameLimits.map((nameLimit, index) => (
              <View
              key={index}
              >
                <Text
                  style={{
                    fontSize: 14,
                    lineHeight: 16.94,
                    color: '#1B1B1B',
                    marginBottom: 5
                  }}>{nameLimit.name}</Text>
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
                    }}
                  />
                </View>
              </View>
            )
            )
          }
        </View>
      )
}

export default SettingLimitContainerInput

const styles = StyleSheet.create({})