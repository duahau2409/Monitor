import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MaketTextGraph from './MaketTextGraph'
import MaketContainerPlayGraph from './MaketContainerPlayGraph'
import MaketContainerNotPlayGraph from './MaketContainerNotPlayGraph'
import SellAll from './SellAll'
import { changeGraph } from '@/Store/Maket'
import { useMemo } from 'react'
import { useAccountSignalQuery } from '@/Services/modules/Maket'
import { handleDataByStatus } from '@/Util'

const MaketModal = () => {
  const date = useSelector(state => state.maket.date)
  const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
  const graph = useSelector(state => state.maket.graph)
  const dispatch = useDispatch()
  const job = useMemo(() => {
    if (dataJob)
      return handleDataByStatus(dataJob.data, 'job', date)
    return null
  }, [dataJob])
  const dataWin = useMemo(() => {
    const data = job ? job.WIN : []
    return data.reduce((pre, item) =>
      (pre + (item.sellPrice / item.entry1) * item.sellAmount - item.sellAmount).toFixed(6)
      , 0)
  })

  const dataLose = useMemo(() => {
    const data = job ? job.LOSE : []
    return data.reduce((pre, item) =>
      (pre + (item.sellPrice / item.entry1) * item.sellAmount - item.sellAmount)
      , 0)
  })

  const total = dataWin + dataLose
  return (
    <View>
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
        <MaketContainerPlayGraph total={total}/>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={graph === 'SELECT_AC' ? true : false}
        onRequestClose={() => {
          dispatch(changeGraph(null))
        }}
      >
        <SellAll total={total} />
      </Modal>
    </View>
  )
}

export default React.memo(MaketModal)

const styles = StyleSheet.create({})