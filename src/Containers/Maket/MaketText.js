import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Maket'

const MaketText = () => {
  const dispatch = useDispatch()
    return (
        <TouchableOpacity 
        style={{marginTop: 3}}
        onPress={()=>{dispatch(changeGraph('MARKET_CAP'))}}
        >
          <Text style={{fontWeight: '400', fontSize:12,lineHeight:14.52, }}>Maket Cap <Text style={{color: '#D31515'}}>($3,226,646,352.00)</Text></Text>
        </TouchableOpacity>
      )
}

export default MaketText

const styles = StyleSheet.create({})