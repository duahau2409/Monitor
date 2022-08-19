import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import { VictoryLine } from 'victory-native'
import Charts from '@/Components/Charts'

const MaketTextGraph = () => {
  const createTime = (h, m, s) => {
    const time = new Date()
    time.setHours(h)
    time.setMinutes(m)
    time.setSeconds(s)
    return time
  }
  const data = [
    { x: createTime(14, 30, 45), y: 388200 },
    { x: createTime(14, 40, 45), y: 388200 },
    { x: createTime(14, 50, 45), y: 387500 },
    { x: createTime(15, 0, 45), y: 387500 },
    { x: createTime(15, 10, 45), y: 387100 },
    { x: createTime(15, 20, 45), y: 387100 },
    { x: createTime(15, 30, 45), y: 386400 },
    { x: createTime(15, 33, 45), y: 384500 },
  ];
  const stringTime = (time) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }
  const domainX = [createTime(14, 30, 45), createTime(15, 37, 45)]
  const domainY = [384000, 388500]
  const tickFormatX = (x) => {
    if (x.getMinutes() % 10 === 0) {
      return stringTime(x);
    }
  }
  const ticksSize = ({ tick }) => (tick.getMinutes() % 10 === 0 ? 4 : 0)
  return (
    <Graph>
      <View>
        <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Market Cap</Text>
        <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 14.52, color: 'red' }}>($3,226,646,352.00)</Text>
      </View>

      <Charts
        data={data}
        tickFormatX={tickFormatX}
        ticksSize={ticksSize}
        tickValues={data.map(x => x.x)}
      >
        <VictoryLine
          data={data}
          domain={{
            x: domainX,
            y: domainY
          }}
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