import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDownBalance, changeDownTime, changeUpBalance, changeUpTime } from '@/Store/Setting/Maket'
import { Controller, useForm } from 'react-hook-form'
import { useRetrieveQuery } from '@/Services/modules/Maket'
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
    const { data } = useRetrieveQuery()
    const upTime = useSelector(state => state.settingMaket.upTime)
    const upBalance = useSelector(state => state.settingMaket.upBalance)
    const downTime = useSelector(state => state.settingMaket.downTime)
    const downBalance = useSelector(state => state.settingMaket.downBalance)



    const { control } = useForm({
        defaultValues: {
            upTime: data.data.upTime + '',
            upBalance: data.data.upBalance + '',
            downTime: data.data.downTime + '',
            downBalance: data.data.downBalance + '',
        }
    })
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
                    {/* <Controller
                        name="upTime"
                        control={control}
                        render={({  }) => ( */}
                            {/* // field */}
                    <TextInput
                        style={{
                            padding: 5,
                            marginLeft: 10,
                            color: '#1B1B1B',
                        }}
                        value={upTime}
                        onChangeText={text => dispatch(changeUpTime(text))}
                    // {...field}
                    />
                    {/* )}
                    /> */}
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
                        value={upBalance}
                        onChangeText={text => dispatch(changeUpBalance(text))}
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
                        value={downTime}
                        onChangeText={text => dispatch(changeDownTime(text))}
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
                        value={downBalance}
                        onChangeText={text => dispatch(changeDownBalance(text))}
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