import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistoryHeader from './HistoryHeader'
import HistoryContainer from './HistoryContainer'
import { useHistoryQuery } from '@/Services/modules/Maket'

const History = () => {
    const { data: datas, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useHistoryQuery({})
    if (load1) {
        return <View style={{ height: '100%', width: '100%',position: 'absolute', justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large"/>
        </View>
      }
    return (
        <View>
            <HistoryHeader />
            <HistoryContainer />
        </View>
    )
}

export default History

const styles = StyleSheet.create({})