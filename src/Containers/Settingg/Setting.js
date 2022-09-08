import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SettingLimit from './SettingLimit/SettingLimit'
import SettingMaket from './SettingMaket/SettingMaket'
import SettingMaketHeaderText from './SettingMaket/SettingMaketHeaderText'
import SettingMaketHeaderButton from './SettingMaket/SettingMaketHeaderButton'
import SettingMaketContainerButton from './SettingMaket/SettingMaketContainerButton'
import SettingMaketOnOff from './SettingMaket/SettingMaketOnOff'

const Setting = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <SettingMaketHeaderText />
            <SettingMaketHeaderButton />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Setting

const styles = StyleSheet.create({})