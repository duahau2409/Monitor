import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { changeGraph } from '@/Store/Maket'
import { useDispatch, useSelector } from 'react-redux'
import { calculatePlay } from '@/Util'
import { useState } from 'react'
import { useMemo } from 'react'

const MaketContainerPlay = ({ total, job, dataLose, dataWin }) => {
  const dispatch = useDispatch()
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
            {/* {cacu?.total} */}
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
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo đang chơi: <Text style={{fontWeight:  'bold'}}>{cacu?.arePlay}</Text> {cacu?.percentArePlay}</Text>
          {/* {cacu?.total} */}
          {/* {cacu?.percentWin} */}
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thắng: {cacu?.win}<Text style={{color: 'green'}}> {cacu?.percentWin}</Text></Text>
            {/* {cacu?.win} {cacu?.percentWin} */}
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Số kèo thua: {cacu?.lose}<Text style={{color: 'red'}}> {cacu?.percentLose}</Text></Text>
            {/* {cacu?.lose} {cacu?.percentLose} */}
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thắng:&emsp;&emsp;&emsp;<Text style={{color: 'green'}}>{dataWin}</Text></Text>
            {/* {cacu?.win} */}
            <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Thua:<Text style={{color: 'red'}}>&emsp;&emsp;&emsp;&emsp;{dataLose}</Text></Text>
            {/* {cacu?.win} */}
          </View>
          <Text style = {{fontSize:12,fontWeight: '400', lineHeight: 14.52, color:'black'}}>Lời, lỗ: <Text style={{color: 'green', fontWeight: 'bold'}}>{total}</Text></Text>
          {/* {cacu?.win} */}
        </TouchableOpacity>
      )
}

export default MaketContainerPlay

const styles = StyleSheet.create({})