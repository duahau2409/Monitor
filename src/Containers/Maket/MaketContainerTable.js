import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { calculatePlay } from '@/Util'
const LimitNumeral = [
    {
        name: "LPCUSDT",
        purchase: "0.406",
        sell: 0.402,
        percent: -1.009,
        interest: -0.201,
        time: "10:49:02",
        day: '05/07/2022'
    },
    {
        name: "YFIIUSDT",
        purchase: '985.7',
        sell: 991.9,
        percent: 0.6289,
        interest: 0.125799,
        time: "10:49:02",
        day: '05/07/2022'

    },
    {
        name: "LPCUSDT",
        purchase: '0.406',
        sell: 0.402,
        percent: -1.009,
        interest: -0.201,
        time: "10:49:02",
        day: '05/07/2022'
    },
    {
        name: "LPCUSDT",
        purchase: "0.406",
        sell: 0.402,
        percent: -1.009,
        interest: -0.201,
        time: "10:49:02",
        day: '05/07/2022'
    },
    {
        name: "LPCUSDT",
        purchase: "0.406",
        sell: 0.402,
        percent: -1.009,
        interest: -0.201,
        time: "10:49:02",
        day: '05/07/2022'
    }
]
const MaketContainerTable = () => {
    const job = useSelector(state => state.maket.job)
    const cacu = calculatePlay(job)
    const hehe = 0
    return (
        <View>
            <View style={{ marginTop: 8, alignItems: 'flex-end' }}>
                <Text style={{ color: 'green', fontSize: 12, lineHeight: 14.52, fontWeight: "500", marginRight: 11 }}>Tổng lời/lỗ: {cacu?.result}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 9, paddingBottom: 7, backgroundColor: '#D9D9D9', marginTop: 7, width: '100%' }}>
                <Text style={{ paddingLeft: 12, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Tên</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Giá mua</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Giá hiện tại</Text>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Lời/lỗ</Text>
                <Text style={{ paddingRight: 38, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Thời gian</Text>
            </View>
            { hehe !== 0 ?
                <View>
                    {
                        LimitNumeral.map((LimitIndex, index) => (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingTop: 14,
                                    paddingBottom: 26,
                                    backgroundColor: '#ffff',
                                    width: '100%'
                                }}
                                key={index}
                            >
                                <Text style={{ paddingLeft: 12, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>{LimitIndex.name}</Text>
                                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>{LimitIndex.purchase}</Text>
                                <View >
                                    <Text
                                        style={{
                                            fontWeight: '500',
                                            fontSize: 12,
                                            lineHeight: 14.52,
                                            color: LimitIndex.sell > 10 ? '#1FA808' : '#D31515'
                                        }}>
                                        {LimitIndex.sell}
                                    </Text>
                                    <Text
                                        style={{
                                            fontWeight: '500',
                                            fontSize: 12,
                                            lineHeight: 14.52,
                                            color: LimitIndex.sell > 0.99 ? '#1FA808' : '#D31515'
                                        }}
                                    >({LimitIndex.percent}%)</Text>
                                </View>
                                <Text
                                    style={{
                                        fontWeight: '500',
                                        fontSize: 12,
                                        lineHeight: 14.52,
                                        color: LimitIndex.sell > 0.99 ? '#1FA808' : '#D31515'
                                    }}
                                >{LimitIndex.interest}</Text>
                                <Text style={{ paddingRight: 38, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: 'black' }}>{LimitIndex.time}</Text>
                            </View>
                        )
                        )
                    }
                </View>
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
        </View>
    )
}

export default MaketContainerTable

const styles = StyleSheet.create({})