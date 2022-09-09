import { View, ActivityIndicator, Image, Text, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import MaketHeaderText from './MaketHeaderText'
import MaketText from './MaketText'
import MaketContainerHistory from './MaketContainerHistory'
import MaketContainerPlay from './MaketContainerPlay'
import MaketContainerNotPlay from './MaketContainerNotPlay'
import MaketContainerResult from './MaketContainerResult'
import MaketContainerTable from './MaketContainerTable'
import History from '../History/History'
import { useSelector } from 'react-redux'
import { useAccountSignalQuery, useNotInJobQuery, useRetrieveQuery } from '@/Services/modules/Maket'
import { RefreshComponent } from '@/Components/Common'
import { handleDataByStatus } from '@/Util'
import MaketModal from './MaketModal'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Main = () => {
  const date = useSelector(state => state.maket.date)
  const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
  const { data: dataNotJob, isFetching: fetch2, isLoading: load2, refetch: refetch2 } = useNotInJobQuery(date)
  const { isFetching: fetch3, isLoading: load3, refetch: refetch3 } = useRetrieveQuery()


  const refresh = () => {
    refetch1()
    refetch2()
    refetch3()
  }

  const job = useMemo(() => {
    if (dataJob)
      return handleDataByStatus(dataJob.data, 'job', date)
    return null
  }, [dataJob])

  const notJob = useMemo(() => {
    if (dataNotJob)
      return handleDataByStatus(dataNotJob.data, 'notJob', date)
    return null
  }, [dataNotJob])
  const dataWin = useMemo(() => {
    const data = job ? job.WIN : []
    return data.reduce((pre, item) =>
      (pre + (item.sellPrice / item.entry1) * item.sellAmount - item.sellAmount).toFixed(6)
      , 0)
  })

  const dataLose = useMemo(() => {
    const data = job ? job.LOSE : []
    return data.reduce((pre, item) =>
      (pre + (item.sellPrice / item.entry1) * item.sellAmount - item.sellAmount).toFixed(6)
      , 0)
  })

  const total = dataWin + dataLose
  if (load1 || load2 || load3) {
    return <View style={{ height: '100%', width: '100%', position: 'absolute', justifyContent: 'center' }}>
      <ActivityIndicator />
      {/* <Text style={{color:'black', fontSize: 50}}> Đấm nhau không</Text> */}
    </View>
  }
  return (
    <View>
      <ScrollView>
        <View>
          <View style={{ marginTop: 36, marginLeft: 12, marginRight: 12 }}>
            <MaketHeaderText />
            <MaketText />
            {/* <RefreshComponent
              refreshing={!load1 && !load2 && !load3 && fetch1 || fetch2 || fetch3}
              onRefresh={refresh}
            > */}
              <MaketContainerHistory />
              <MaketContainerPlay job={job} total={total} dataWin={dataWin} dataLose ={dataLose}/>
              {/*  */}
              <MaketContainerNotPlay job={job} notJob={notJob} />
              {/*  */}
              <MaketContainerResult job={job} notJob={notJob} />
              {/*  */}
            {/* </RefreshComponent> */}

          </View>
          <View>
            <MaketContainerTable job={job} notJob={notJob} total={total}/>
          </View>
        </View>
      </ScrollView>
      <MaketModal />
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
