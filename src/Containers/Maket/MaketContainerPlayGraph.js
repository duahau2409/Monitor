import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryHistogram, VictoryStack, VictoryTheme } from 'victory-native';
import { VictoryLine } from 'victory-native'
import Charts from '@/Components/Charts'
import { calculatePlay, convertDate, format2degit, handleDataByHours, handleDataByStatus } from '@/Util';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { useAccountSignalQuery } from '@/Services/modules/Maket';
import { RefreshComponent } from '@/Components/Common';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { changeDate } from '@/Store/Maket';


const MaketContainerPlayGraph = ({ total, setLoading = ()=> {}, ...other }) => {
    // const job = useSelector(state => state.maket.job)
    // const cacu = calculatePlay(job)
    const date = useSelector(state => state.maket.date)
    const dispatch = useDispatch()

    console.log(date)
    const { data: dataJob, isFetching, isLoading, refetch } = useAccountSignalQuery(date)

    const job = useMemo(() => {
        if (dataJob)
            return handleDataByStatus(dataJob.data, 'job', date)
        return {
            FAIL: [],
            NEW: [],
            WIN: [],
            LOSE: [],
        }
    }, [dataJob])

    const cacu = calculatePlay(job)

    const dataJobGraph = useMemo(() => handleDataByHours(job, 'job'), [job])
    // const countByHours = (arr = [], x, nameAtbTime) => {
    //     return arr.filter(item =>
    //         x === new Date(item[nameAtbTime]).getHours()
    //     ).length
    // }

    // const initData = (nameAtbTime, arr = []) => {
    //     const data = []
    //     for (let x = -1; x <= 24; x++) {
    //         data.push({ x, y: countByHours(arr, x, nameAtbTime) })
    //     }
    //     return data
    // }
    // const fail = useMemo(() => initData('createdAt', job?.FAIL), [job])
    // const neww = useMemo(() => initData('createdTime', job?.NEW), [job])
    // const lose = useMemo(() => initData('createdTime', job?.LOSE), [job])
    // const win = useMemo(() => initData('createdTime', job?.WIN), [job])

    const tickFormatX = (x) => {
        return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
    }

    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    const [isVisible, setIsVisible] = useState(false);
    return (
        <RefreshComponent
            refreshing={!isLoading && isFetching}
            // refreshing={false}
            onRefresh={() => { refetch() }}
        >
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
                                {/* {cacu?.percentWin} */}
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
                            {/* {cacu?.percentLose} */}
                            <Text style={{
                                fontWeight: '400',
                                fontSize: 12,
                                lineHeight: 14.52,
                                color: '#454545',
                            }}>Lời, lỗ&ensp;<Text
                                style={{
                                    color: '#1FA808'
                                }}>{total}</Text></Text>

                        </View>
                        <TextInput
                            style={{
                                width: '100%',
                                height: 22,
                                paddingTop: 5,
                                paddingBottom: 5,
                                paddingLeft: 11,
                                paddingRight: 50,
                                borderWidth: 1,
                                borderColor: '#9E9E9E',
                                marginTop: 26,
                                borderRadius: 4,
                                flexDirection: 'row',
                                alignItems: 'center',
                                color: 'black',
                                fontSize: 10
                            }}
                        >
                            <Text>{date}</Text>
                        </TextInput>
                        <TouchableOpacity
                            onPress={() => { setIsVisible(true) }}
                            style={{
                                paddingLeft: 20,
                                paddingRight: 20
                            }}
                        >
                            <Image
                                source={require('../../Assets/Images/Icon/Vector.png')}
                                resizeMode='contain'
                                style={{
                                    right: 6,
                                    top: -15,
                                    color: '#9E9E9E',
                                    paddingLeft: 11,
                                    position: 'absolute',
                                    height: 10,
                                    width: 10,
                                    paddingRight: 10
                                }}
                            />
                        </TouchableOpacity>
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
                            <VictoryBar
                                data={dataJobGraph.FAIL}
                                style={{ data: { fill: '#fa91ca', width: 4 } }}
                            />
                            <VictoryBar
                                data={dataJobGraph.NEW}
                                style={{ data: { fill: '#faad14', width: 4 } }}
                            />
                            <VictoryBar
                                data={dataJobGraph.LOSE}
                                style={{ data: { fill: '#ff4d4f', width: 4 } }}
                            />
                            <VictoryBar
                                data={dataJobGraph.WIN}
                                style={{ data: { fill: '#48c60a', width: 4 } }}
                            />
                        </VictoryStack>
                    </Charts>
                </Graph>
            </View>
            <View>
                <DateTimePickerModal
                    isVisible={isVisible}
                    date={new Date(date)}
                    mode="date"
                    onConfirm={(date) => {
                        setIsVisible(false)
                        dispatch(changeDate(new Date(date).toISOString().slice(0, 10)))
                    }}
                    onCancel={() =>
                        setIsVisible(false)
                    }
                />
            </View>
        </RefreshComponent>
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