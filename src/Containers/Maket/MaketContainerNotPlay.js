import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeGraph } from '@/Store/Maket'
import { calculate } from '@/Util'

const MaketContainerNotPlay = ({job, notJob}) => {
    // 
    const dispatch = useDispatch()
    const cacu = calculate(job, notJob)
    return (
        <TouchableOpacity
            style={{
                marginTop: 14,
                borderWidth: 1,
                borderColor: '#E9E9E9',
                padding: 11
            }}
            onPress={() => {
                dispatch(changeGraph('NO_BET'))
                // console.log(cacu?.total)
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#D19804', fontWeight: '700', fontSize: 12, lineHeight: 14.52 }}>Kèo không chơi: {cacu?.total}</Text>
                {/*  */}
                <View style={{ height: 25, width: 25, borderRadius: 1000, backgroundColor: '#D7D8DA', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={require('../../Assets/Images/Icon/VectorMaket.png')}
                        resizeMode='cover'
                        style={{
                            height: 11,
                            width: 15,
                            backgroundColor: '#E9E9E9',
                            color: "#fff"
                        }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 31 }}>
                <Text style={{ fontWeight: '700', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Số kèo thắng: {cacu?.win}<Text style={{ color: 'green' }}> {cacu?.percentWin}</Text>{cacu?.percentArePlay}</Text>
                {/* {cacu?.win} {cacu?.percentWin} */}
                <Text style={{ fontWeight: '700', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Số kèo thua: {cacu?.lose} <Text style={{ color: 'red' }}> {cacu?.percentLose} </Text></Text>
                {/* */}
            </View>
        </TouchableOpacity>
    )
}

export default MaketContainerNotPlay

const styles = StyleSheet.create({})