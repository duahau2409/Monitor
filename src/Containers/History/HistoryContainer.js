import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const tables = [
    {
        status: "Tắt",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    },
    {
        status: "Bật",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",

    },
    {
        status: "Tắt",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    },
    {
        status: "Bật",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    },
    {
        status: "Tắt",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    },
    {
        status: "Tắt",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    },
    {
        status: "Tắt",
        time: "10:49:02 05/07/2022",
        reason: "Lorem ipsum....",
    }
]
const HistoryContainer = () => {
    return (

        <View>
            <View style={{
                marginTop: 23,
                width: '100%',
                paddingLeft: 12,
                paddingBottom: 7,
                paddingTop: 9,
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '#1B1B1B'
            }}>
                <Text style={{fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000'}}>Trạng thái</Text>
                <Text style={{ paddingLeft: 33,fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000' }}>Thời gian</Text>
                <Text style={{ paddingLeft: 89,fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000' }}>Lí do</Text>
            </View>
            {
                tables.map((table, index) => (
                    <View
                        style={{
                            padding: 14,
                            width: '100%',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: '#D9D9D9',
                            
                        }}
                        key={index}
                    >
                        <Text style={{fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000'}}>{table.status}</Text>
                        <Text style={{ paddingLeft: 62,fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000' }}>{table.time}</Text>
                        <Text style={{ paddingLeft: 19,fontWeight: '500', fontSize: 12, lineHeight: 14.52, color:'#000' }}>{table.reason}</Text>
                    </View>
                )
                )
            }
        </View>
    )
}

export default HistoryContainer

const styles = StyleSheet.create({})