import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Graph from '@/Components/Graph'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryHistogram, VictoryStack, VictoryTheme } from 'victory-native';
import { VictoryLine } from 'victory-native'
import Charts from '@/Components/Charts'
import { convertDate, format2degit } from '@/Util';
import { useSelector } from 'react-redux';

const MaketContainerPlayGraph = () => {
    const date = useSelector(state => state.market.date)

    const data = [
        { x: -4, y: 0 },
        { x: 0, y: 37 },
        { x: 1, y: 26 },
        { x: 2, y: 7 },
        { x: 3, y: 13 },
        { x: 4, y: 21 },
        { x: 5, y: 27 },
        { x: 6, y: 11 },
        { x: 10, y: 0 },
        { x: 15, y: 0 },
        { x: 20, y: 0 },
        { x: 24, y: 0 },


    ];
    const data2012 = [
        { quarter: 1, earnings: 8 },
        { quarter: 2, earnings: 8 },
        { quarter: 3, earnings: 4 },
        { quarter: 4, earnings: 4 },
        { quarter: 5, earnings: 8 },
        { quarter: 6, earnings: 6 },
        { quarter: 7, earnings: 7 },

    ];

    const data2013 = [
        { quarter: 1, earnings: 30 },
        { quarter: 2, earnings: 17 },
        { quarter: 3, earnings: 4 },
        { quarter: 4, earnings: 10 },
        { quarter: 5, earnings: 6 },
        { quarter: 6, earnings: 0 },
        { quarter: 7, earnings: 0 },
    ];

    const data2014 = [
        { quarter: 1, earnings: 0 },
        { quarter: 2, earnings: 0 },
        { quarter: 3, earnings: 0 },
        { quarter: 4, earnings: 0 },
        { quarter: 5, earnings: 0 },
        { quarter: 6, earnings: 2 },
        { quarter: 7, earnings: 5 },

    ];

    const data2015 = [
        { quarter: 1, earnings: 0 },
        { quarter: 2, earnings: 0 },
        { quarter: 3, earnings: 0 },
        { quarter: 4, earnings: 0 }
    ];

    const tickFormatX = (x) => {
        return x % 5 === 0 ? format2degit(x) + ` (${convertDate(date).slice(0, 5)})` : ''
    }

    const ticksSize = ({ tick }) => (tick % 5 === 0 ? 4 : 0)
    return (
        <View style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <Graph >
                <View >
                    <Text style={{ fontSize: 14, fontWeight: '700', lineHeight: 16.94, color: '#1B1B1B' }}>Kèo chơi</Text>
                    <View style={{ flexDirection: 'row' }}>
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
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 12,
                            lineHeight: 14.52,
                            color: '#454545',
                        }}>Lời, lỗ&ensp;<Text
                            style={{
                                color: '#1FA808'
                            }}>5.264344</Text></Text>
                    </View>
                </View >
                {/* <Charts
                    data={data}
                    tickFormatX={tickFormatX}
                    tickValues={data.map(x => x.x)}
                    domain={{
                        x: [0, 24],
                        y: [0, 40]
                    }}
                    singleQuadrantDomainPadding={{ x: false }}
                    domainPadding={20}
                    style={styles.lineThree}
                >
                    <VictoryBar data={data} />
                </Charts> */}

                <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                >
                    <VictoryAxis
                        tickValues={[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]}
                        tickFormat={tickFormatX}
                        style={[styles.axisYears]}

                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`${x / 1}`)}
                        offsetX={40}
                        style={[styles.axisOne]}
                    />
                    <VictoryStack
                        colorScale={["#88B7E3", "#D31515", "#1FA808"]}
                        style={{
                            data: { width: 6 },
                            labels: { padding: -20 }
                        }}
                    >
                        <VictoryBar
                            data={data2014}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={data2012}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={data2013}
                            x="quarter"
                            y="earnings"
                        />
                    </VictoryStack>
                </VictoryChart>
            </Graph>
        </View>


    )
}

export default MaketContainerPlayGraph

const styles = {
    lineThree: {
        data: { stroke: "#2A6FB0", strokeWidth: 2 },
    }
}

const getStyles = (ticksSize) => ({

    // INDEPENDENT AXIS
    axisYears: {
        axis: { stroke: "#C9C9C9", strokeWidth: 1 },
        ticks: {
            size: ticksSize ? ticksSize : 4,
            stroke: "#C9C9C9",
            strokeWidth: 1
        },
        tickLabels: {
            fill: "#454545",
            fontFamily: "inherit",
            fontSize: 10
        }
    },

    // DATA SET ONE
    axisOne: {
        grid: {
            stroke: ({ tick }) =>
                tick === 0 ? "transparent" : "#C9C9C9",
            strokeWidth: 1
        },
        axis: { strokeWidth: 0 },
        ticks: { strokeWidth: 0 },
        tickLabels: {
            fill: "#454545",
            fontFamily: "inherit",
            fontSize: 10
        }
    },
})