import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import Limit from '@/Containers/Limit/Limit'
import LogIn from '@/Containers/LogIn/LogIn'
import User from '@/Containers/User/User'
import Maket from '@/Containers/Maket/Maket'
import Setting from '@/Containers/Settingg/Setting'
import MyTabBar from './MyTabs'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import MaketTextGraph from '@/Containers/Maket/MaketTextGraph'
import MaketContainerPlay from '@/Containers/Maket/MaketContainerPlay'
import MaketContainerPlayGraph from '@/Containers/Maket/MaketContainerPlayGraph'
import MaketContainerNotPlayGraph from '@/Containers/Maket/MaketContainerNotPlayGraph'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  // const page = useSelector(state => state.auth.page)
  // const graph = useSelector(state=>state.market.graph)
  // const graph = useSelector(state => state.maket.graph)
  return (
    <View style = {{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarStyle: {
          //   width: '100%',
          //   backgroundColor: '#1B1B1B',
          //   height:66,
          // },
        }}
        // initialRouteName={page ? page : 'Market'} 
        tabBar={props => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Maket"
          component={Maket}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name="Limit"
          component={Limit}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name="LogIn"
          component={LogIn}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
        <Tab.Screen
          name="Home"
          component={ExampleContainer}
          options={{
            tabBarIconStyle: { display: 'none' },
            tabBarLabelPosition: 'beside-icon',
          }}
        />
      </Tab.Navigator>
    </View>

  )
}

export default MainNavigator
