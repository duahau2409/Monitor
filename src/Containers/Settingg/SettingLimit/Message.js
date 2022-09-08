import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Message = () => {
  const message = useSelector(state => state.settingLimit.message)
  return (
    <View style={{ marginTop: 4, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 60}}>
      <Text  style={{color: '#D31515', }}>
        {message}
      </Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})