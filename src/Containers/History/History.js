import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistoryHeader from './HistoryHeader'
import HistoryContainer from './HistoryContainer'

const History = () => {
    return (
        <View>
            <HistoryHeader />
            <HistoryContainer />
        </View>
    )
}

export default History

const styles = StyleSheet.create({})