import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserImage = () => {
    return (
        <View style = {{justifyContent: 'center', alignSelf: 'center'}}>
          <Image source={require('../../Assets/Images/UserImg/userdefaul.png')} 
          resizeMode = 'contain'
          style = {{
            height: 160,
            width: 160,
            borderRadius: 112
          }}
          />
          <Text style = {{ fontWeight :'700', fontSize: 20, lineHeight: 20, color: 'black', marginTop: 20}}>Nguyễn Văn An</Text>
        </View>
      )
}

export default UserImage

const styles = StyleSheet.create({})