import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import { VictoryLine } from 'victory-native'
import Charts from '@/Components/Charts'
import { useListMarketCapQuery } from '@/Services/modules/Maket'
import { useDispatch } from 'react-redux'
import { convertCurrency, convertTime } from '@/Util'
import { useMemo } from 'react'

const MaketTextGraph = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useListMarketCapQuery()
  console.log('11111111111112222222222', data)
  const dispatch = useDispatch()
  // bắt dữ liệu đầu cuối trong thời gian
  const dataFinal = useMemo(() => {
    if (data) {
      const newData = []
      let i
      for (i = 1; i < data.data.length; i++) {
        if (data.data[i].marketCap !== data.data[i - 1].marketCap) {
          newData.push({ x: convertTime(new Date(data.data[i - 1].createdAt)), y: data.data[i - 1].marketCap })
          newData.push({ x: convertTime(new Date(data.data[i].createdAt)), y: data.data[i].marketCap })
        }
      }
      // console.log(data.data[i - 1].marketCap, '----')
      // console.log(Math.floor(data.data[i - 1].marketCap/10000000000))
      return newData
    }
    return [{ x: new Date(), y: 0 }]
  }, [data])

  const tickFormatX = (x, i) => {
    if (i % Math.floor(dataFinal.length / 7) === 0)
      return x
  }

  const ticksSize = ({ index }) => {
    return (index % Math.floor(dataFinal.length / 7) === 0 ? 4 : 0)
  }

  // const datas = [
  //   { x: createTime(14, 30, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap)},
  //   { x: createTime(14, 40, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(14, 50, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(15, 0, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(15, 10, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(15, 20, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(15, 30, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  //   { x: createTime(15, 33, 45), y: data && convertCurrency(data.data[data.data.length - 1].marketCap) },
  // ];
  // const stringTime = (time) => {
  //   return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  // }
  // const domainX = [createTime(14, 30, 45), createTime(15, 37, 45)]
  // const domainY = [384000, 388500]
  return (
    <Graph>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Market Cap</Text>
        <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 14.52, color: 'red' }}>{data && convertCurrency(data.data[data.data.length - 1].marketCap)}</Text>
      </View>

      <Charts
        data={dataFinal}
        tickFormatX={tickFormatX}
        tickFormatY={(t)=>Math.floor(t/1000000) + ' M'}
        ticksSize={ticksSize}
        tickValues={dataFinal.map(x => x.x)}
      >
        <VictoryLine
          data={dataFinal}
          scale={{ x: "time", y: "linear" }}
          standalone={false}
          style={styles.lineThree}
        />
      </Charts>
    </Graph>
  )
}

export default MaketTextGraph

const styles = {
  lineThree: {
    data: { stroke: "#2A6FB0", strokeWidth: 2 },
  }
}