import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '@/Navigators/utils'

const HistoryHeader = () => {
    return (
        <TouchableOpacity 
        style={{
          flexDirection: 'row', 
          marginTop: 39, 
          marginLeft: 10, 
          alignItems: 'center'}}
          onPress = {() => {navigate('Market-main')}}
          >
            <Image 
                source={require('../../Assets/Images/Icon/VectorLeft.png')}
                resizeMode = 'contain'
                style = {{
                    height: 13,
                    width: 6,
                    color: "#1B1B1B",
                    marginRight: 11
                }}
            />
          <Text style={{
            fontWeight: '700',
            fontSize: 16,
            lineHeight: 19.36,
            color: '#1B1B1B'
          }}>Lịch sử bật tắt</Text>
        </TouchableOpacity>
      )
}

export default HistoryHeader

const styles = StyleSheet.create({})