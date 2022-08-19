import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const UserInforPass = () => {
    return (
        <View style={{ borderBottomWidth: 1, borderColor: '#F3F3F3', marginTop: 55 }}>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../Assets/Images/Icon/VectorI.png')}
                    resizeMode='contain'
                    style={{
                        height: 16,
                        width: 16,
                        marginRight: 12
                    }}
                />
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 14.52,
                        color: '#198CB0'
                    }}>Cập nhật thông tin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../../Assets/Images/Icon/VectorKey.png')}
                    resizeMode='contain'
                    style={{
                        height: 16,
                        width: 16,
                        marginRight: 12,
                        marginTop: 23,
                    }}
                />
                <Text
                    style={{
                        fontWeight: '700',
                        fontSize: 12,
                        lineHeight: 14.52,
                        color: '#198CB0',
                        paddingTop: 23,
                        paddingBottom: 23
                    }}>Đổi mật khẩu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInforPass

const styles = StyleSheet.create({})