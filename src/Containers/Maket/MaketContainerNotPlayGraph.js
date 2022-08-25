import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import Charts from '@/Components/Charts'
import { VictoryBar, VictoryStack } from 'victory-native'
import { useDispatch, useSelector } from 'react-redux'
import { calculate, convertDate, format2degit } from '@/Util'
import { useMemo } from 'react'

const MaketContainerNotPlayGraph = () => {
    const job = useSelector(state => state.maket.job)
    const notJob = useSelector(state => state.maket.notJob)
    const cacu = calculate(job, notJob)
    const date = useSelector(state => state.maket.date)

    const countByHours = (arr = [], x, nameAtbTime) => {
        return arr.filter(item =>
            x === new Date(item[nameAtbTime]).getHours()
        ).length
    }

    const initData = (nameAtbTime, arr = []) => {
        const data = []
        for (let x = -1; x <= 24; x++) {
            data.push({ x, y: countByHours(arr, x, nameAtbTime) })
        }
        return data
    }

    const fail = useMemo(() => initData('createdAt', job?.FAIL), [job, notJob])
    const neww = useMemo(() => initData('createdTime', notJob?.NEW), [job, notJob])
    const lose = useMemo(() => initData('createdTime', notJob?.LOSE), [job, notJob])
    const win = useMemo(() => initData('createdTime', notJob?.WIN), [job, notJob])

    const tickFormatX = (x) => {
        return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
    }

    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    return (
        <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <Graph>
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Kèo không chơi</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12,
                                lineHeight: 14.52,
                                color: '#454545',
                                marginRight: 12
                            }}>Thắng&ensp;<Text
                                style={{
                                    color: '#1FA808',
                                }}>{cacu?.win + ' ' + cacu?.percentWin}</Text>
                        </Text>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 12,
                            lineHeight: 14.52,
                            color: '#454545',
                            marginRight: 12
                        }}>Thua&ensp;<Text
                            style={{
                                color: '#D31515'
                            }}>{cacu?.lose + ' ' + cacu?.percentLose}</Text></Text>
                    </View>
                </View>
                <Charts
                    // data={data2014}
                    tickFormatX={tickFormatX}
                    ticksSize={ticksSize}
                    tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
                >
                    <VictoryStack>
                        <VictoryBar
                            data={fail}
                            style={{ data: { fill: '#fa91ca', width: 4 } }}
                        />
                        <VictoryBar
                            data={neww}
                            style={{ data: { fill: '#faad14', width: 4 } }}
                        />
                        <VictoryBar
                            data={lose}
                            style={{ data: { fill: '#ff4d4f', width: 4 } }}
                        />
                        <VictoryBar
                            data={win}
                            style={{ data: { fill: '#48c60a', width: 4 } }}
                        />
                    </VictoryStack>
                </Charts>
            </Graph>
        </View>

    )
}

export default MaketContainerNotPlayGraph

const styles = StyleSheet.create({})