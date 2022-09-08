import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LimitHeaderText = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%'
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1
                }}>
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 19,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>Limit</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{
                            marginRight: 9,
                            fontSize: 12,
                            lineHeight: 14.52,
                            fontWeight: "400",
                            color: '#9E9E9E'
                        }}>tự động</Text>
                    <Text
                        style={{
                            fontSize: 12,
                            lineHeight: 14.52,
                            color: '#9E9E9E',
                            fontWeight: "400",
                        }}>tắt</Text>
                </View>
            </View>
        </View>
    )
}

export default LimitHeaderText

const styles = StyleSheet.create({})