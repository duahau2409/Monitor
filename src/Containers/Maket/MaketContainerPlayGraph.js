import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryHistogram, VictoryStack, VictoryTheme } from 'victory-native';
import { VictoryLine } from 'victory-native'
import Charts from '@/Components/Charts'
import { calculatePlay, convertDate, format2degit } from '@/Util';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const MaketContainerPlayGraph = () => {
    const job = useSelector(state => state.maket.job)
    const cacu = calculatePlay(job)
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
    const fail = useMemo(() => initData('createdAt', job?.FAIL), [job])
    const neww = useMemo(() => initData('createdTime', job?.NEW), [job])
    const lose = useMemo(() => initData('createdTime', job?.LOSE), [job])
    const win = useMemo(() => initData('createdTime', job?.WIN), [job])

    const tickFormatX = (x) => {
        return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
    }

    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    return (
        <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <Graph >
                <View >
                    <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Kèo chơi</Text>
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
                                }}>{cacu?.percentWin}</Text>
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
                            }}>{cacu?.percentLose}</Text></Text>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 12,
                            lineHeight: 14.52,
                            color: '#454545',
                        }}>Lời, lỗ&ensp;<Text
                            style={{
                                color: '#1FA808'
                            }}>{cacu?.result}</Text></Text>
                    </View>
                </View >
                {/* <Charts
                    data={data}
                    tickFormatX={tickFormatX}
                    tickValues={data.map(x => x.x)}
                    domain={{
                        x: [0, 24],
                        y: [0, 40]
                    }}
                    singleQuadrantDomainPadding={{ x: false }}
                    domainPadding={20}
                    style={styles.lineThree}
                >
                    <VictoryBar data={data} />
                </Charts> */}

                <Charts
                    // data={data2014}
                    tickFormatX={tickFormatX}
                    ticksSize={ticksSize}
                    tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
                >
                    <VictoryStack>
                        {/* <VictoryBar
                            data={fail}
                            style={{ data: { fill: '#fa91ca', width: 4 } }}
                        />
                        <VictoryBar
                            data={neww}
                            style={{ data: { fill: '#faad14', width: 4 } }}
                        /> */}
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

export default MaketContainerPlayGraph

const styles = {
    lineThree: {
        data: { stroke: "#2A6FB0", strokeWidth: 2 },
    }
}

const getStyles = (ticksSize) => ({

    // INDEPENDENT AXIS
    axisYears: {
        axis: { stroke: "#C9C9C9", strokeWidth: 1 },
        ticks: {
            size: ticksSize ? ticksSize : 4,
            stroke: "#C9C9C9",
            strokeWidth: 1
        },
        tickLabels: {
            fill: "#454545",
            fontFamily: "inherit",
            fontSize: 10
        }
    },

    // DATA SET ONE
    axisOne: {
        grid: {
            stroke: ({ tick }) =>
                tick === 0 ? "transparent" : "#C9C9C9",
            strokeWidth: 1
        },
        axis: { strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
            fill: "#454545",
            fontFamily: "inherit",
            fontSize: 10
        }
    },
})