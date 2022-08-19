import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SettingLimitContainerButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#1B1B1B',
                width: '60%',
                paddingTop: 6,
                paddingBottom: 7,
                marginVertical: 5,
                alignItems: 'center',
                borderRadius: 4,

            }}>
            <Text
                style={{
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 14.52,
                    color: '#ffff'
                }}>Cập Nhật</Text>
        </TouchableOpacity>
    )
}

export default SettingLimitContainerButton

const styles = StyleSheet.create({})