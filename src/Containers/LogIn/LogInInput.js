import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { toggleIsSecurity, changePassword, changeEmail } from '@/Store/LogIn'

const LogInInput = () => {
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    const password = useSelector(state => state.login.password) 
    const email = useSelector(state => state.login.email) 
    const isSecurity = useSelector(state => state.login.isSecurity)
    const dispatch = useDispatch()
    return (
        <View>
            <Text
                style={{
                    marginLeft: 60,
                    fontSize: 14,
                    lineHeight: 16.94,
                    color: '#ffff',
                    marginTop: 57
                }}>Tên đăng nhập</Text>
            <View
                style={{
                    backgroundColor: "#0000",
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 4,
                    height: 40,
                    marginLeft: 60,
                    marginRight: 53,
                    justifyContent: 'center'
                }}>
                <TextInput
                    style={{
                        marginLeft: 10,
                        color: '#fff'
                    }}
                    value={email}
                    // onChangeText={setUserName}
                    onChangeText={text => dispatch(changeEmail(text))} 
                />
            </View>
            <Text
                style={{
                    marginLeft: 60,
                    fontSize: 14,
                    lineHeight: 16.94,
                    color: '#ffff',
                    marginTop: 23,
                }}>Mật khẩu</Text>
            <View
                style={{
                    backgroundColor: "#0000",
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 4,
                    height: 40,
                    marginLeft: 60,
                    marginRight: 53,
                    paddingRight: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                <TextInput
                    style={{
                        marginLeft: 10,
                        color: '#fff',
                        paddingRight: 0
                    }}
                    value={password}
                    onChangeText={text => dispatch(changePassword(text))}
                    secureTextEntry = {isSecurity}
                />
                <TouchableOpacity
                onPress={() => {
                    dispatch(toggleIsSecurity())
                }}
                >
                    <Image
                        source={require('../../Assets/Images/Icon/VectorEye.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LogInInput

const styles = StyleSheet.create({})