import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import SettingMaket from './SettingMaket'
import SettingLimit from '../SettingLimit/SettingLimit'

const SettingMaketHeaderButton = () => {
    const [activeTab, setActiveTab] = useState('Maket')
    return (
        <View>
            <View style={{ width: '100%', flexDirection: 'row', marginTop: 16 }}>
                <View
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        borderRightWidth: 1,
                        borderColor: '#fff',
                        borderTopLeftRadius: 4
                    }}

                >
                    <HeaderButton
                        text={"Maket"}
                        btnColor="#1B1B1B"
                        textColor="#ffff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </View>
                <View
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        borderTopRightRadius: 4,
                    }}>
                    <HeaderButton
                        text={"Limit"}
                        btnColor="#6C6C6C"
                        textColor="#ffff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </View>
            </View>
            <View>
                <View>
                    {activeTab === 'Maket' ? <SettingMaket /> : <SettingLimit />}
                </View>
            </View>
        </View>



    )
}

export default SettingMaketHeaderButton

const HeaderButton = (props) => (
    <View
        style={{
            padding: 5,
            backgroundColor: props.activeTab === props.text ? '#1B1B1B' : '#6C6C6C',
            width: '100%'
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
                }}
            >{props.text}</Text>
        </TouchableOpacity>
    </View>
)