import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'

const MaketContainerNotPlayGraph = () => {
  return (
    <Graph>
            <View>
                <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Kèo không chơi</Text>
                <View style = {{flexDirection: 'row'}}>
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
                            }}>41.26%</Text>
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
                        }}>28.08%</Text></Text>
                </View>
            </View>
        </Graph>
  )
}

export default MaketContainerNotPlayGraph

const styles = StyleSheet.create({})