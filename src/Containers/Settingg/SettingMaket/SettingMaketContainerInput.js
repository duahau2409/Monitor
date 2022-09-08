import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePriceDecrease, changePriceIncrease, changeTimeDecrease, changeTimeIncrease } from '@/Store/Setting/Maket'
const nameTitles = [
    {
        name: "Thời gian tăng",
        unit: 'Giây'
    },
    {
        name: "Số tiền tăng",
        unit: 'VND'
    },
    {
        name: "Thời gian giảm",
        unit: 'Giây'
    },
    {
        name: "Số tiền tăng",
        unit: 'VND'
    }
]
const SettingMaketContainerInput = () => {
    const dispatch = useDispatch()
    // const timeIncrease = useSelector(state => state.setting.timeIncrease)
    // const priceIncrease = useSelector(state => state.setting.priceIncrease)
    // const timeDecrease = useSelector(state => state.setting.timeDecrease)
    // const priceDecrease = useSelector(state => state.setting.priceDecrease)
    return (
        <View style={{ marginBottom: 8 }}>
            <View>
                <Text
                    style={{
                        position: 'absolute',
                        right: 6,
                        top: 22,
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 14.25,
                        color: '#9E9E9E',
                        padding: 6,
                        borderLeftWidth: 1,
                        borderColor: '#9E9E9E',
                    }}
                >Giây</Text>
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 16.94,
                        color: '#1B1B1B',
                        marginBottom: 5
                    }}>Thời gian tăng</Text>
                <View
                    style={{
                        backgroundColor: "#0000",
                        borderWidth: 1,
                        borderColor: '#9E9E9E',
                        borderRadius: 4,
                        height: 27,
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <TextInput
                        style={{
                            marginLeft: 10,
                            color: '#1B1B1B',
                            padding: 5
                        }}
                        // value={timeIncrease}
                        // onChangeText={text => dispatch(changeTimeIncrease(text))}
                    />
                </View>
            </View>
            <View>
                <Text
                    style={{
                        position: 'absolute',
                        right: 6,
                        top: 22,
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 14.25,
                        color: '#9E9E9E',
                        paddingLeft: 6,
                        paddingTop: 11,
                        borderLeftWidth: 1,
                        borderColor: '#9E9E9E',
                    }}
                >Triệu</Text>
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 16.94,
                        color: '#1B1B1B',
                        marginBottom: 5
                    }}>Số tiền tăng</Text>
                <View
                    style={{
                        backgroundColor: "#0000",
                        borderWidth: 1,
                        borderColor: '#9E9E9E',
                        borderRadius: 4,
                        height: 27,
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <TextInput
                        style={{
                            marginLeft: 10,
                            color: '#1B1B1B',
                            padding: 5
                        }}
                        // value={priceIncrease}
                        // onChangeText={text => dispatch(changePriceIncrease(text))}
                    />
                </View>
            </View>
            <View>
                <Text
                    style={{
                        position: 'absolute',
                        right: 6,
                        top: 22,
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 14.25,
                        color: '#9E9E9E',
                        padding: 6,
                        borderLeftWidth: 1,
                        borderColor: '#9E9E9E',
                    }}
                >Giây</Text>
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 16.94,
                        color: '#1B1B1B',
                        marginBottom: 5
                    }}>Thời gian giảm</Text>
                <View
                    style={{
                        backgroundColor: "#0000",
                        borderWidth: 1,
                        borderColor: '#9E9E9E',
                        borderRadius: 4,
                        height: 27,
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <TextInput
                        style={{
                            marginLeft: 10,
                            color: '#1B1B1B',
                            padding: 5
                        }}
                        // value={timeDecrease}
                        // onChangeText={text => dispatch(changeTimeDecrease(text))}
                    />
                </View>
            </View>
            <View>
                <Text
                    style={{
                        position: 'absolute',
                        right: 6,
                        top: 22,
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 14.25,
                        color: '#9E9E9E',
                        paddingLeft: 6,
                        paddingTop: 11,
                        borderLeftWidth: 1,
                        borderColor: '#9E9E9E',
                    }}
                >Triệu</Text>
                <Text
                    style={{
                        fontSize: 14,
                        lineHeight: 16.94,
                        color: '#1B1B1B',
                        marginBottom: 5
                    }}>Số tiền giảm</Text>
                <View
                    style={{
                        backgroundColor: "#0000",
                        borderWidth: 1,
                        borderColor: '#9E9E9E',
                        borderRadius: 4,
                        height: 27,
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <TextInput
                        style={{
                            marginLeft: 10,
                            color: '#1B1B1B',
                            padding: 5
                        }}
                        // value={priceDecrease}
                        // onChangeText={text => dispatch(changePriceDecrease(text))}
                    />
                </View>
            </View>
        </View>
    )
}

export default SettingMaketContainerInput

const ContainerInput = () => (
    <View
        style={{
            backgroundColor: "#0000",
            borderWidth: 1,
            borderColor: '#9E9E9E',
            borderRadius: 4,
            height: 27,
            justifyContent: 'center',
            marginBottom: 10,
        }}>
        <TextInput
            style={{
                marginLeft: 10,
                color: '#1B1B1B',
                padding: 5
            }}
        />
    </View>
)