import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogInInput from './LogInInput'
import LogInButton from './LogInButton'
import Message from './Message'

const LogIn = () => {
    return (
        <ScrollView style={{ backgroundColor: '#1B1B1B', height: '100%', width: '100%', }}>
            <View style={{ paddingTop: 80 }}>
                <View style={{ alignItems: 'center' }}>
                    <StatusBar barStyle={'light-content'} backgroundColor='#1B1B1B'></StatusBar>
                    <Image 
                    source={require("../../Assets/Images/Logo/image_1.png")} 
                    style={{ height: 181, width: 200 }} 
                    resizeMode="contain" 
                    />
                    {/* <Monitor /> */}
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#fff',
                            marginTop: 17,
                            lineHeight: 19.36,
                            textTransform: 'uppercase'
                        }}>monitor</Text>
                </View>
                <View>
                    <LogInInput />
                    <Message />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={{
                            position: 'absolute',
                            right: 0,
                            marginRight: 53,
                            marginTop: 0,
                            color: '#fff'
                        }}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ marginTop: 43, marginLeft: 53, marginRight: 60 }}>
                    <LogInButton />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LogIn

const styles = StyleSheet.create({})