import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const SettingMaketOnOff = () => {
    const [activeTab, setActiveTab] = useState('Bật')
    return (
        <View style={{  flexDirection: 'row', marginTop: 16, paddingBottom: 10}}>
            <View
                style={{
                    
                }}>
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

export default SettingMaketOnOff

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