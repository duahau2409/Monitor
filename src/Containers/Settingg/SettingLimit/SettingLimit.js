import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingLimitHeaderText from './SettingLimitHeaderText'
import SettingLimitHeaderButton from './SettingLimitHeaderButton'
import SettingLimitContainerInput from './SettingLimitContainerInput'
import SettingLimitContainerButton from './SettingLimitContainerButton'
import SettingLimitContainerFuntion from './SettingLimitContainerFuntion'
import Message from './Message'

const SettingLimit = () => {
    return (
        <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <View style={{
                paddingBottom: 40,
                borderWidth: 1,
                borderColor: '#E9E9E9',
                padding: 12,
                paddingTop: 42
            }}>
                <SettingLimitContainerInput />
                <Message />
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
                    <SettingLimitContainerButton />
            </View>
            <View style = {{paddingTop: 10, paddingBottom:10, borderWidth: 1, borderColor: "#E9E9E9"}}>
                <SettingLimitContainerFuntion />
            </View>
        </View>
    )
}

export default SettingLimit

const styles = StyleSheet.create({})