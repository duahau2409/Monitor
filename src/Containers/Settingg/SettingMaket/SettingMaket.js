import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingMaketHeaderText from './SettingMaketHeaderText'
import SettingMaketHeaderButton from './SettingMaketHeaderButton'
import SettingMaketContainerInput from './SettingMaketContainerInput'
import SettingMaketCheckBox from './SettingMaketCheckBox'
import SettingMaketContainerAPI from './SettingMaketContainerAPI'
import SettingMaketContainerButton from './SettingMaketContainerButton'
import SettingMaketOnOff from './SettingMaketOnOff'

const SettingMaket = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <View>
                <View style={{
                    paddingBottom: 40,
                    borderWidth: 1,
                    borderColor: '#E9E9E9',
                    padding: 12,
                    paddingTop: 42
                }}>
                    <SettingMaketContainerInput />
                    <SettingMaketCheckBox />
                    <SettingMaketContainerAPI />
                </View>
                <View
                    style={{
                        paddingBottom: 7,
                        borderWidth: 1,
                        borderColor: '#E9E9E9',
                        padding: 12,
                        paddingTop: 9,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                    <SettingMaketContainerButton />
                </View>
            </View>
            <View style = {{ borderWidth: 1, borderColor: "#E9E9E9", paddingTop: 8, paddingLeft: 12, marginBottom: 54}}>
                <Text style = {{fontWeight: '400', fontSize: 10, lineHeight: 12.1, color: 'black'}}>Cấu hình tự động chơi</Text>
                <SettingMaketOnOff />
            </View>
        </View>
        </ScrollView>
    </SafeAreaView>
)
}

export default SettingMaket

const styles = StyleSheet.create({})