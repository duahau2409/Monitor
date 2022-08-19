import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Maket'


const Graph = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <View
            style={{
                backgroundColor: 'rgba(67, 67, 67, 0.25)',
                position: 'absolute',
                zIndex: 5,
                height: '100%',
                width: '100%'
            }}>
            <StatusBar backgroundColor='rgba(67, 67, 67, 0.25)' />
            <TouchableOpacity
                style={{ height: 170, width: '100%' }}
                onPress={() => { dispatch(changeGraph(null)) }}
            >

            </TouchableOpacity>
            <View style={{
                backgroundColor: '#fff',
                // marginTop: 176,
                borderTopLeftRadius: 35,
                borderTopRightRadius: 35,
                flex: 1,
                padding: 15
            }}>
                {children}
            </View>
        </View>
    )
}

export default Graph

const styles = StyleSheet.create({})