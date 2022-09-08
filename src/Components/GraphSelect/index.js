import { StatusBar, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Maket'

const GraphSelect = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <View
            style={{
                backgroundColor: 'rgba(67, 67, 67, 0.25)',
                position: 'absolute',
                zIndex: 5,
                height: '100%',
                width: '100%',
                flexDirection:'row',
                justifyContent: 'center',
            }}>
            <StatusBar backgroundColor='rgba(67, 67, 67, 0.25)' />
            <View style={{
                backgroundColor: '#fff',
                // marginTop: 176,
                borderRadius: 4,
                flex: 1,
                padding: 15
            }}>
                {children}
            </View>
        </View>
    )
}

export default GraphSelect

const styles = StyleSheet.create({})