import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circle from '@/Components/Cricle'
import { useHistoryQuery } from '@/Services/modules/Maket'
import { useState } from 'react'
import { convertDate, convertTime } from '@/Util'

const HistoryContainer = () => {
    const { data: datas } = useHistoryQuery({})
    const [page] = useState(0)
    return (

        <View>
            <View style={{
                marginTop: 23,
                width: '100%',
                paddingLeft: 12,
                paddingBottom: 7,
                paddingTop: 9,
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#1B1B1B'
            }}>
                <Text style={{ fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: '#000' }}>Trạng thái</Text>
                <Text style={{ paddingLeft: 33, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: '#000' }}>Thời gian</Text>
                <Text style={{ paddingLeft: 101, fontWeight: '500', fontSize: 12, lineHeight: 14.52, color: '#000' }}>Lí do</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 25 }}>
                {datas && datas.data.map((data, index) => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            paddingVertical: 14,
                            borderWidth: 1,
                            borderColor: '#D9D9D9',
                        }} key={index}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Circle status={data.turnOn} colorActive='#D31515' />
                                <Text>{data.turnOn ? 'Bật' : 'Tắt'}</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                paddingLeft: 10,
                                justifyContent: 'center',
                                paddingLeft: 30,

                            }}>
                                <Text>{convertTime(data.createdAt) + ' ' + convertDate(data.createdAt)}</Text>
                            </View>
                            <View style={{
                                flex: 2,
                                paddingLeft: 10,
                                width: 70,
                                height: 22,
                            }}>
                                <Text style={{
                                }}>{data.reason}
                                </Text>
                                <Text style={{
                                    position: 'absolute',
                                    right: 25
                                }}>....</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default HistoryContainer

const styles = StyleSheet.create({})