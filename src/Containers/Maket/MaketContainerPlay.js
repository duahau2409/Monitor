import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { changeGraph } from '@/Store/Maket'
import { useDispatch, useSelector } from 'react-redux'
import { calculatePlay } from '@/Util'

const MaketContainerPlay = () => {
  const dispatch = useDispatch()
  const job = useSelector(state => state.maket.job)
  const cacu = calculatePlay(job)

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
            <Text style={{color:'#D19804', fontWeight: '700', fontSize: 12, lineHeight: 14.52}}>Kèo chơi: {cacu?.total}</Text>
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
          {/* số kèo đang chơi sẽ bằng running nhưng k tìm kiếm được running */}
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo đang chơi: <Text style={{fontWeight:  'bold'}}>{cacu?.total}</Text>{cacu?.percentWin}</Text>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thắng: <Text style={{color: 'green'}}>{cacu?.win} {cacu?.percentWin}</Text></Text>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thua: <Text style={{color: 'red'}}>{cacu?.lose} {cacu?.percentLose}</Text></Text>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thắng:&emsp;&emsp;&emsp;<Text style={{color: 'green'}}>{cacu?.resultWin}</Text></Text>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thua:<Text style={{color: 'red'}}>&emsp;&emsp;&emsp;&emsp;{cacu?.resultLose}</Text></Text>
          </View>
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Lời, lỗ: <Text style={{color: 'green', fontWeight: 'bold'}}>{cacu?.result}</Text></Text>
        </TouchableOpacity>
      )
}

export default MaketContainerPlay

const styles = StyleSheet.create({})