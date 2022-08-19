import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { changeGraph } from '@/Store/Maket'
import { useDispatch } from 'react-redux'

const MaketContainerPlay = () => {
  const dispatch = useDispatch()
    return (
        <TouchableOpacity 
        style={{ 
          marginTop: 20 , 
          borderWidth: 1, 
          borderColor: '#E9E9E9', 
          padding: 11
          }}
          onPress={()=>{dispatch(changeGraph('BET'))}}
          >
          <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color:'#D19804', fontWeight: '700', fontSize: 12, lineHeight: 14.52}}>Kèo chơi: 143</Text>
            <View style = {{ height: 25, width: 25, borderRadius: 1000, backgroundColor: '#D7D8DA', justifyContent:'center',alignItems:'center'}}>
              <Image
                source={require('../../Assets/Images/Icon/VectorMaket.png')}
                resizeMode='cover'
                style={{
                  height: 11,
                  width: 15,
                  width: 15,
                  backgroundColor: '#E9E9E9',
                  color: "#fff"
                }}
              />
            </View>
          </View>
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo đang chơi: <Text style={{fontWeight:  'bold'}}>51</Text> (35.66%)</Text>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thắng: <Text style={{color: 'green'}}>59 (41,26%)</Text></Text>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thua: <Text style={{color: 'red'}}>33 (23,08%)</Text></Text>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thắng:&emsp;&emsp;&emsp;<Text style={{color: 'green'}}>12.684076</Text></Text>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thua:<Text style={{color: 'red'}}>&emsp;&emsp;&emsp;&emsp;-7.419732</Text></Text>
          </View>
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Lời, lỗ: <Text style={{color: 'green', fontWeight: 'bold'}}>5.264344</Text></Text>
        </TouchableOpacity>
      )
}

export default MaketContainerPlay

const styles = StyleSheet.create({})