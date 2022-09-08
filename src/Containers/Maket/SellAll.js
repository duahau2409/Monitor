import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import GraphSelect from '@/Components/GraphSelect'
import { changeGraph } from '@/Store/Maket'
import { useDispatch } from 'react-redux'
import { useSellAllMutation } from '@/Services/modules/Maket/sellAll'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { useState } from 'react'
import { useEffect } from 'react'

const SellAll = ({ total }) => {
    const dispatch = useDispatch()
    const [sellAll, { data, isLoading, isSuccess, error }] = useSellAllMutation()
    const submit = () => {
        sellAll({
            priceBalance: Number(total)
        })
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(changeGraph(null))
        }
    }, [isSuccess])
    console.log(data, error, isSuccess)
    return (
        <View>
            <View style={{ height: 120, width: 250, borderWidth: 1, borderColor: '#D9D9D9', alignSelf: 'center', marginTop: "50%" }}>
                <GraphSelect>
                    <View>
                        <Text style={{ color: 'black', fontWeight: '500', fontSize: 16, lineHeight: 20 }}>Chắc chắn bán hết?</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 4,
                                borderWidth: 1,
                                borderColor: '#3782cc'
                            }}
                            onPress={() => { dispatch(changeGraph(null)) }}
                        >
                            <Text style={{
                                padding: 8,
                                color: '#3782cc',
                            }}>Hủy bỏ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderColor: '#d9d9d9',
                                borderWidth: 1,
                                borderColor: '#ff4d4f'
                            }}
                            onPress={submit}
                        >
                            <Text style={{
                                padding: 8,
                                color: '#ff4d4f'
                            }}>Đồng ý</Text>
                        </TouchableOpacity>
                    </View>
                </GraphSelect>
            </View>
        </View>

    )
}

export default SellAll

const styles = StyleSheet.create({})