import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSellAllMutation } from '@/Services/modules/Maket/sellAll'
import { resetAuth, updateAuth } from '@/Store/Auth'
import { submitSuccess } from '@/Store/LogIn'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { useEffect } from 'react'
import { changeGraph } from '@/Store/Maket'

const LimitContainerResult = () => {
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState('Đã có kết quả')
    const [Submitted, SetSubmitted] = useState(1)
    const onPressHandler = (value) => {
        SetSubmitted(value);
    }
    // const [sellAll, { data, isLoading, isSuccess, error }] = useSellAllMutation()
    // console.log(total)
    // const submit = () => {
    //     sellAll({
    //         priceBalance: Number(total)
    //     })
    //     console.log(priceBalance, '++++112233')
    // }
    // useEffect(() => {
    //     if (isSuccess) {
    //         console.log(data)
    //     }
    // }, [isSuccess])
    // console.log(isSuccess, data, error, '--------')
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, borderBottomWidth: 1, borderColor: '#E9E9E9' }}>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        borderRightWidth: 1,
                        borderColor: '#fff',

                    }}>
                    <ResultBTN
                        text={"Đã có kết quả"}
                        btnColor="#1B1B1B"
                        textColor="#ffff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onPressHandler={() => onPressHandler(1)}
                    />
                </View>
                <View
                    style={{
                        borderRightWidth: 1,
                        borderColor: '#fff',
                    }}
                // onPress={onPressHandler}
                >
                    <ResultBTN
                        text={"Chưa có kết quả"}
                        btnColor="#6C6C6C"
                        textColor="#ffff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onPressHandler={() => onPressHandler(2)}
                    />
                </View>
            </View>
            {Submitted === 2 &&
                <TouchableOpacity
                    onPress={() => {
                        dispatch(changeGraph('SELECT_AC'))
                    }}
                >
                    <Text style={{ backgroundColor: 'black', color: '#fff', paddingRight: 27, paddingLeft: 27, paddingBottom: 6, paddingTop: 7 }}>Bán hết</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default LimitContainerResult

const ResultBTN = (props) => (
    <View
        style={{
            padding: 5,
            borderRadius: 4,
            backgroundColor: props.activeTab === props.text ? '#D9D9D9' : '#ffff',
        }}
    >
        <TouchableOpacity
            onPress={() => {
                props.setActiveTab(props.text);
                props.onPressHandler()
            }}
        >
            <Text
                style={{
                    color: props.activeTab === props.text ? "black" : "#9E9E9E",
                    fontWeight: "700",
                    fontSize: 12,
                    lineHeight: 14.52,
                    paddingLeft: 9,
                    paddingRight: 11,
                    paddingBottom: 7,
                    paddingTop: 6
                }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)