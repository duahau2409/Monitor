import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Circle from '../../Components/Cricle'
import { useRetrieveQuery } from '@/Services/modules/Maket'

const MaketHeaderText = () => {
    const { data } = useRetrieveQuery()
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%'
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1
                }}>
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            lineHeight: 19,
                            fontWeight: 'bold',
                        }}>Maket</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    {data && <Circle status={data.data.auto} />}
                    <Text
                        style={{
                            marginRight: 9,
                            fontSize: 12,
                            lineHeight: 14.52,
                            fontWeight: "400",
                            color: '#9E9E9E'
                        }}>tự động</Text>
                        {data && <Circle status={data.data.turnOn} />}
                    <Text
                        style={{
                            fontSize: 12,
                            lineHeight: 14.52,
                            color: '#9E9E9E',
                            fontWeight: "400",
                        }}>{data?.data.turnOn?'Bật':'Tắt'}</Text>
                </View>
            </View>
        </View>
    )
    
}

export default MaketHeaderText

const styles = StyleSheet.create({})