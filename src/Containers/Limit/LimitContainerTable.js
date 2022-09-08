import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useMemo } from 'react'
// const LimitNumeral = [
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: '0.406',
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
//     {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     },
//     {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     }, {
//         name: "YFIIUSDT",
//         purchase: '985.7',
//         sell: 991.9,
//         percent: 0.6289,
//         interest: 0.125799,
//         time: "10:49:02",
//         day: '05/07/2022'

//     }, {
//         name: "LPCUSDT",
//         purchase: "0.406",
//         sell: 0.402,
//         percent: -1.009,
//         interest: -0.201,
//         time: "10:49:02",
//         day: '05/07/2022'
//     },
// ]
const LimitContainerTable = ({ job, notJob }) => {
    const [hadResult, setHadResult] = useState(true)
    const datas = useMemo(() => {
        if (!job || !notJob) return []
        const data = hadResult ? [...job.WIN, ...job.LOSE] : notJob.RUNNING
        return data.map(item => (
            {
                name: item.symbol,
                purchase: item.entry1.toFixed(3),
                sell: item.sellPrice,
                percent: ((item.sellPrice / item.entry1) * 100 - 100).toFixed(3),
                interest: ((item.sellPrice / item.entry1) * item.buy - item.buy).toFixed(3),
                time: convertTime(item.createdAt),
                day: convertDate(item.createdAt),
            }
        ))
    }, [job, notJob, hadResult])
    return (
        <View>
            <View style={{ marginTop: 8, alignItems: 'flex-end' }}>
                <Text style={{ color: 'green', fontSize: 12, lineHeight: 14.52, fontWeight: "500", marginRight: 11 }}>Tổng lời/lỗ: 5.264342</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 9, paddingBottom: 7, backgroundColor: '#D9D9D9', marginTop: 7, width: '100%' }}>
                <Text style={{ paddingLeft: 12, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Tên</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black', paddingLeft: 25 }}>Giá mua</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Giá hiện tại</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Lời/lỗ</Text>
                <Text style={{ paddingRight: 38, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Thời gian</Text>
            </View>
            <ScrollView style={{
                marginBottom: 45
            }}>
                {
                    datas && datas.length !== 0 ?
                    datas.map((data, index) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingTop: 14,
                                paddingBottom: 26,
                                backgroundColor: '#ffff',
                                width: '100%',
                                borderWidth: 1,
                                borderColor: '#D9D9D9',
                            }}
                            key={index}
                        >
                            <Text
                                style={{
                                    fontWeight: '500',
                                    fontSize: 12,
                                    lineHeight: 14.52,
                                    color: 'black'
                                }}>{data.purchase}</Text>
                            <View >
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        fontSize: 12,
                                        lineHeight: 14.52,
                                        color: data.sell > 10 ? '#1FA808' : '#D31515'
                                    }}>
                                    {data.sell}
                                </Text>
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        fontSize: 12,
                                        lineHeight: 14.52,
                                        color: data.percent > 0 ? '#1FA808' : '#D31515'
                                    }}
                                >({data.percent}%)</Text>
                            </View>
                            <Text
                                style={{
                                    fontWeight: '500',
                                    fontSize: 12,
                                    lineHeight: 14.52,
                                    color: data.interest > 0 ? '#1FA808' : '#D31515'
                                }}>{data.interest}</Text>
                            <Text style={{ paddingRight: 38, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>{data.time}</Text>
                        </View>
                    )
                    )
                    :
                    <View style ={{
                        width: '100%',
                        minHeight:190,
                        borderWidth: 1,
                        borderColor: "#D9D9D9",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <Image
                        source={require('../../Assets/Images/Icon/empty.png')} 
                        resizeMode='contain'
                        style = {{
                            height: 50,
                            width: 50,
                            shadowColor: 'black'
                        }}
                        />
                        <Text>Trống</Text>
                    </View>
                }
            </ScrollView>
        </View>
    )
}

export default LimitContainerTable

const styles = StyleSheet.create({})