import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image } from 'react-native';
import Buttons from '../components/buttons/Buttons';
import Input from '../components/input/Input';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from '../response_types/GoogleUser';
import Test from './Test';

WebBrowser.maybeCompleteAuthSession();

const Home = () => {
    const [userInfo, setUserInfo] = useState<User>()
    const [accessToken, setAccessToken] = useState<string | undefined>("");


    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: process.env.EXPO_CLIENT_ID,
        iosClientId: process.env.IOS_CLIENT_ID,
        androidClientId: process.env.ANDROID_CLIENT_ID 
    })


    useEffect(() => {
        if (response?.type === "success"){
            setAccessToken(response.authentication?.accessToken)
        }
    }, [response])


    const getUserData = async () => {
        const userInfoRes = await axios.get(process.env.GOOGLE_OAUTH_API ? process.env.GOOGLE_OAUTH_API : "undefined", {
            headers: { Authorization: `Bearer ${accessToken}`}
        });
        
        // replace with a banner
        if (!userInfoRes) {
            return (
                <View>
                    <Text>No User Info Was Found</Text>
                </View>
            )
        }


        // set user info
        setUserInfo(userInfoRes.data)


        // TODO: replace with a banner component and redirect to the main page
        if (!userInfo){ 
            return (
                <Text style={{color:"white"}}>The user data was not read properly</Text>
            )
        }
    }


    if (userInfo) {
        return (
            <Test user={userInfo} />
        )
    }


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
            <Buttons 
                title='Google' 
                leftIcon='google' 
                onPress={accessToken ? getUserData : ()=>promptAsync()}
            />
        </View>
    )
}

export default Home;
