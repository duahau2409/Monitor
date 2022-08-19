import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaketHeaderText from './MaketHeaderText'
import MaketText from './MaketText'
import MaketContainerHistory from './MaketContainerHistory'
import MaketContainerPlay from './MaketContainerPlay'
import MaketContainerNotPlay from './MaketContainerNotPlay'
import MaketContainerResult from './MaketContainerResult'
import MaketContainerTable from './MaketContainerTable'
import History from '../History/History'
import { createStackNavigator } from '@react-navigation/stack'
import MaketTextGraph from './MaketTextGraph'
import MaketContainerPlayGraph from './MaketContainerPlayGraph'
import MaketContainerNotPlayGraph from './MaketContainerNotPlayGraph'
import { useDispatch, useSelector } from 'react-redux'
import { changeGraph } from '@/Store/Maket'

const Stack = createStackNavigator()

const Main = () => {
  const graph = useSelector(state => state.maket.graph)
  const dispatch = useDispatch()
  return (
    <View>
      <ScrollView>
        <View>
          <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <MaketHeaderText />
            <MaketText />
            <MaketContainerHistory />
            <MaketContainerPlay />
            <MaketContainerNotPlay />
            <MaketContainerResult />
          </View>
          <View>
            <MaketContainerTable />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={graph === 'MARKET_CAP' ? true : false}
          onRequestClose={() => {
            dispatch(changeGraph(null))
          }}
        >
          <MaketTextGraph /> 
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={graph === 'BET' ? true : false}
          onRequestClose={() => {
            dispatch(changeGraph(null))
          }}
        >
          <MaketContainerPlayGraph /> 
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={graph === 'NO_BET' ? true : false}
          onRequestClose={() => {
            useDispatch(changeGraph(null))
          }}
        >
          <MaketContainerNotPlayGraph /> 
        </Modal>
      </ScrollView>
      {/* <View style={{height:'85%', width: "100%", backgroundColor: '#9E9E9E', borderTopLeftRadius: 49, borderTopRightRadius: 49}}>
          </View> */}
    </View>
  )
}
const Maket = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='Market-main'
        component={Main}
      />
      <Stack.Screen
        name='History'
        component={History}
      />
    </Stack.Navigator>
  )
}
export default Maket
