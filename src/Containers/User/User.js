import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserImage from './UserImage'
import UserInforPass from './UserInforPass'
import UserLogOut from './UserLogOut'

const User = () => {
    return (
        <View style = {{paddingTop: 110, paddingRight: 32, paddingLeft: 41,}}>
            <UserImage />
            <UserInforPass />
            <UserLogOut />
        </View>
      )
}

export default User

const styles = StyleSheet.create({})