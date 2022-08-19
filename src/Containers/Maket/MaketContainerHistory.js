import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { navigate } from '@/Navigators/utils'

const MaketContainerHistory = () => {
    return (
        <TouchableOpacity
        style={{
            width: '100%', 
            paddingLeft: 11, 
            paddingTop: 7, 
            paddingBottom: 6, 
            borderWidth: 1, 
            borderColor: '#9E9E9E', 
            marginTop: 25, 
            borderRadius: 4,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center'
            }}
            onPress = {() => {
              navigate('History')
            }}
            >
          <Text style={{fontSize: 12, lineHeight: 14.52, fontWeight:'700', color:'#1B1B1B'}}>Lịch sử bật tắt</Text>
          <Image
          source={require('../../Assets/Images/Icon/VectorRight.png')}
          resizeMode = 'contain'
          style = {{
            width: 5.07,
            height: 8.89,
            color: '#9E9E9E',
            paddingLeft: 11
          }}
          />
        </TouchableOpacity>
      )
}

export default MaketContainerHistory

const styles = StyleSheet.create({})