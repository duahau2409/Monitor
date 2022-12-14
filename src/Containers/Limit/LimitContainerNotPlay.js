import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LimitContainerNotPlay = () => {
    return (
        <View style={{ marginTop: 14, borderWidth: 1, borderColor: '#E9E9E9', padding: 11 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#D19804', fontWeight: '700', fontSize: 12, lineHeight: 14.52 }}>Kèo không chơi: 1</Text>
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
                <Text style = {{fontWeight: '400', fontSize: 12, lineHeight: 14.52, color: 'black'}}>Số kèo thắng: <Text style={{ color: 'green' }}>1 (100,00%)</Text></Text>
                <Text style = {{fontWeight: '400', fontSize: 12, lineHeight: 14.52, color: 'black'}}>Số kèo thua: <Text style={{ color: 'red' }}>0 (0,00%)</Text></Text>
            </View>
        </View>
    )
}

export default LimitContainerNotPlay

const styles = StyleSheet.create({})