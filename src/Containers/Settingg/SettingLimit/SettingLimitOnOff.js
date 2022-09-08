import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SettingLimitOnOff = () => {
    const [activeTab, setActiveTab] = useState('Bật')
    const [ani] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(
            ani,
            {
                toValue: activeTab ? 0 : 1,
                duration: 300,
                useNativeDriver: false
            }
        ).start()
    }, [activeTab])
    const toggleAuto = () => {
        setActiveTab(!activeTab)
    }
    return (
        <View style={{ flexDirection: 'row', marginTop: 16, marginLeft: 12 }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#2A6FB0',
                borderRadius: 30,
                padding: 3,
                height: 38,
                width: 110,
                overflow: 'hidden',
                marginRight: 12
            }}
            >
                <Text style={{ width: '50%', textAlign: 'center', color: '#fff', flex: 1 }}>Tự động</Text>
                <Animated.View style={{
                    height: '100%',
                    width: 30,
                    borderRadius: 100,
                    backgroundColor: '#FFFFFF',
                    left: 0,
                }} />
            </TouchableOpacity>
            <View>
                <SettingBTN
                    text={"Bật"}
                    btnColor="#1B1B1B"
                    textColor="#ffff"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </View>
            <View
                style={{
                    borderRightWidth: 1,
                    borderColor: '#fff',
                }}>
                <SettingBTN
                    text={"Tắt"}
                    btnColor="#6C6C6C"
                    textColor="#ffff"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </View>
        </View>
    )
}

export default SettingLimitOnOff

const SettingBTN = (props) => (
    <View
        style={{
            padding: 5,
            borderRadius: props.activeTab === props.text ? 4 : 0,
            backgroundColor: props.activeTab === props.text ? '#D19804' : '#D9D9D9',
        }}
    >
        <TouchableOpacity
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 14,
                    lineHeight: 16.94,
                    paddingLeft: 13,
                    paddingRight: 13,
                    paddingBottom: 7,
                    paddingTop: 6
                }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)