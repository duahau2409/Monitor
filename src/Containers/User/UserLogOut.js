import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'

const UserLogOut = () => {
    return (
        <View style={{ paddingTop: 12}}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../Assets/Images/Icon/VectorLogOut.png')}
                    resizeMode='contain'
                    style={{
                        height: 16,
                        width: 16,
                        marginRight:12
                    }}
                />
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 14.52,
                        color: '#6C6C6C'
                    }}
                >Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserLogOut

const styles = StyleSheet.create({})