import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image } from 'react-native';
import Buttons from '../components/buttons/Buttons';
import Input from '../components/input/Input';

WebBrowser.maybeCompleteAuthSession();

const Home = () => {

    const [userInfo, setUserInfo] = useState<any>()
    const [accessToken, setAccessToken] = useState<string | undefined>("");

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        expoClientId: "184759537711-5f70pj4ga70irmjm9ljvc2nbh7juv6k6.apps.googleusercontent.com",
        iosClientId: "184759537711-t3llls6iga52nn19ribnumst0bunhep2.apps.googleusercontent.com",
        androidClientId: "184759537711-pk1sgm5al7gcar55klnfen94ld9r9s86.apps.googleusercontent.com"
    })

    const getUserData = () => {
        if (userInfo) {
            return (
                <View>
                    <Image source={{ uri: userInfo.picture }}  />
                    <Text>{ userInfo.name }</Text>
                </View>
            )
        }
    }

    useEffect(() => {
        if (response?.type === "success"){
            setAccessToken(response.authentication?.accessToken)
        }
    }, [response])

    return(
        <View>
            <Text
                style={{
                    color: "white",
                    fontSize: 30,
                    textAlign: "center",
                    padding: 50,
                    fontWeight: "bold",
                    letterSpacing: 5
                }}>
                    Fit-Cal
            </Text>

            <Input 
                placeholder='Username'
                leftIcon='user' 
            />
            <Input 
                placeholder='Password'
                leftIcon='lock' 
                secure={true}
            />
            <Buttons title='Login' />
            <Text style={{
                color: "white",
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 15,
                marginBottom: 15
            }} >
                - OR LOGIN WITH -
            </Text>
            <Text style={{color:"white"}}>{ accessToken ? accessToken : "Fucking login for gods sake" }</Text>
            <
                Buttons 
                title='Google' 
                leftIcon='google' 
                onPress={accessToken ? getUserData : ()=>promptAsync({ useProxy: true, showInRecents: true})}
                />
            <Buttons title='Twitter' leftIcon='twitter' />
        </View>
    )
}

export default Home;
