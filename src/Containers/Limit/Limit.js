import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LimitContainerTable from './LimitContainerTable'
import LimitContainerResult from './LimitContainerResult'
import LimitContainerNotPlay from './LimitContainerNotPlay'
import LimitContainerPlay from './LimitContainerPlay'
import LimitHeaderText from './LimitHeaderText'

const Limit = () => {
    return (
        <View>
          <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <LimitHeaderText />
            <LimitContainerPlay />
            <LimitContainerNotPlay />
            <LimitContainerResult />
          </View>
          <View>
            <LimitContainerTable />
          </View>
        </View>
    
      )
}

export default Limit

const styles = StyleSheet.create({})