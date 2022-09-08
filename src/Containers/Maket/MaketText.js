import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeGraph } from '@/Store/Maket'
import { useListMarketCapQuery } from '@/Services/modules/Maket'
import { convertCurrency } from '@/Util'
import { useEffect } from 'react'

const MaketText = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useListMarketCapQuery()
  const dispatch = useDispatch()
  useEffect(() => {
    if (error) {
      // console.log(error, '---error')
    }
  }, [error])
  return (
    <TouchableOpacity
      style={{ marginTop: 3 }}
      onPress={() => { dispatch(changeGraph('MARKET_CAP')) }}
    >
      <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 14.52, color: 'black' }}>Maket Cap <Text style={{ color: '#D31515' }}>{data && convertCurrency(data.data[data.data.length - 1].marketCap)}</Text></Text>
    </TouchableOpacity>
  )
}

export default MaketText

const styles = StyleSheet.create({})