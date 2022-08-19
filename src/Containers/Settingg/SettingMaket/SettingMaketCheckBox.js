import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CheckBox from '@react-native-community/checkbox';

const SettingMaketCheckBox = () => {
  const [agree, setAgree] = useState(false);
    return (
        <View style= {{flexDirection: 'row', alignItems:'center'}}>
            <CheckBox
                value={agree}
                onValueChange={() => setAgree(!agree)}
                color={agree ? "#4630EB" : undefined}
            />
            <Text>Connect Binance</Text>
        </View>

    )
}

export default SettingMaketCheckBox

const styles = StyleSheet.create({})