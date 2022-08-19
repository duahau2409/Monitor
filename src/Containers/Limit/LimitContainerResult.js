import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

const LimitContainerResult = () => {
    const [activeTab, setActiveTab] = useState('Đã có kết quả')
    const [Submitted, SetSubmitted] = useState(false)
    const onPressHandler = () => {
        SetSubmitted(!Submitted);
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, borderBottomWidth: 1, borderColor: '#E9E9E9' }}>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        borderRightWidth: 1,
                        borderColor: '#fff',

                    }}>
                    <ResultBTN
                        text={"Đã có kết quả"}
                        btnColor="#1B1B1B"
                        textColor="#ffff"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        borderRightWidth: 1,
                        borderColor: '#fff',
                    }}
                    onPress={onPressHandler}
                >
                    <ResultBTN
                        text={"Chưa có kết quả"}
                        btnColor="#6C6C6C"
                        textColor="#ffff"
                        activeTab={activeTab}
                        onPress={onPressHandler}
                        setActiveTab={setActiveTab}
                    />
                </TouchableOpacity>
            </View>
            {Submitted ?
                <View>
                    <Text style={{ backgroundColor: 'black', color: '#fff', paddingRight: 27, paddingLeft: 27, paddingBottom: 6, paddingTop: 7 }}>Bán hết</Text>
                </View>
                :
                null
            }
        </View>

    )
}

export default LimitContainerResult

const ResultBTN = (props) => (
    <View
        style={{
            padding: 5,
            borderRadius: 4,
            backgroundColor: props.activeTab === props.text ? '#D9D9D9' : '#ffff',
        }}
    >
        <TouchableOpacity
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: props.activeTab === props.text ? "black" : "#9E9E9E",
                    fontWeight: "700",
                    fontSize: 12,
                    lineHeight: 14.52,
                    paddingLeft: 9,
                    paddingRight: 11,
                    paddingBottom: 7,
                    paddingTop: 6
                }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
)