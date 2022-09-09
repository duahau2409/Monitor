import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState }  from 'react'
import Graph from '@/Components/Graph'
import Charts from '@/Components/Charts'
import { VictoryBar, VictoryStack } from 'victory-native'
import { useDispatch, useSelector } from 'react-redux'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { calculate, convertDate, format2degit, handleDataByHours, handleDataByStatus } from '@/Util'
import { useMemo } from 'react'
import { useAccountSignalQuery, useNotInJobQuery } from '@/Services/modules/Maket'
import { RefreshComponent } from '@/Components/Common'
import { changeDate } from '@/Store/Maket'

const MaketContainerNotPlayGraph = ({ setLoading = ()=> {}, ...other}) => {
    // const job = useSelector(state => state.maket.job)
    // const notJob = useSelector(state => state.maket.notJob)
    const date = useSelector(state => state.maket.date)
    const dispatch = useDispatch()


    const { data: dataJob, isFetching: fetch1, isLoading: load1, refetch: refetch1 } = useAccountSignalQuery(date)
    const { data: dataNotJob, isFetching: fetch2, isLoading: load2, refetch: refetch2 } = useNotInJobQuery(date)

    const job = useMemo(() => {
        if (dataJob)
            return handleDataByStatus(dataJob.data, 'job', date)
        return []
    }, [dataJob])

    const notJob = useMemo(() => {
        if (dataNotJob)
            return handleDataByStatus(dataNotJob.data, 'notJob', date)
        return []
    }, [dataNotJob])
    const cacu = calculate(job, notJob)


    const dataJobGraph = useMemo(() => handleDataByHours(job, 'job'), [job])
    const dataNotJobGraph = useMemo(() => handleDataByHours(notJob, 'notJob'), [notJob])



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

    // const fail = useMemo(() => initData('createdAt', job?.FAIL), [job, notJob])
    // const neww = useMemo(() => initData('createdTime', notJob?.NEW), [job, notJob])
    // const lose = useMemo(() => initData('createdTime', notJob?.LOSE), [job, notJob])
    // const win = useMemo(() => initData('createdTime', notJob?.WIN), [job, notJob])

    const tickFormatX = (x) => {
        return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
    }

    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    const [isVisible, setIsVisible] = useState(false);

    // const showDatePicker = () => {
    //     setDatePickerVisibility(true);
    // };

    // const hideDatePicker = () => {
    //     setDatePickerVisibility(false);
    // };

    // const handleConfirm = (date) => {
    //     console.warn("A date has been picked: ", date);
    //     hideDatePicker();
    // };

    return (
        <RefreshComponent
            refreshing={!load1 && !load2 && fetch1 || fetch2}
            onRefresh={() => { refetch1(), refetch2() }}
        >
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
                                {/*  */}
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
                            {/* */}
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
                            onPress={() => {setIsVisible(true)}}
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
                    </View>
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
                                data={dataNotJobGraph.NEW}
                                style={{ data: { fill: '#faad14', width: 4 } }}
                            />
                            <VictoryBar
                                data={dataNotJobGraph.LOSE}
                                style={{ data: { fill: '#ff4d4f', width: 4 } }}
                            />
                            <VictoryBar
                                data={dataNotJobGraph.WIN}
                                style={{ data: { fill: '#48c60a', width: 4 } }}
                            />
                        </VictoryStack>
                    </Charts>
                </Graph>
            </View>
            <View>
                <DateTimePickerModal
                    isVisible={isVisible}
                    date= {new Date(date)}
                    mode="date"
                    onConfirm={(date) => {
                        setIsVisible(false)
                        dispatch(changeDate(new Date(date).toISOString().slice(0,10)))
                    }}
                    onCancel={() =>
                        setIsVisible(false)
                    }
                />
            </View>
        </RefreshComponent >
    )
}

export default MaketContainerNotPlayGraph

const styles = StyleSheet.create({})