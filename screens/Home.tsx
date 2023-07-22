import * as Google from 'expo-auth-session/providers/google';
import { View, Text, Image } from 'react-native';
import Buttons from '../components/buttons/Buttons';
import Input from '../components/input/Input';
import { useState, useEffect } from 'react';


const Home = () => {

    const [userInfo, setUserInfo] = useState<any>()
    const [accessToken, setAccessToken] = useState<string | undefined>("");

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: "184759537711-5f70pj4ga70irmjm9ljvc2nbh7juv6k6.apps.googleusercontent.com",
        iosClientId: "184759537711-t3llls6iga52nn19ribnumst0bunhep2.apps.googleusercontent.com",
        androidClientId: "184759537711-pk1sgm5al7gcar55klnfen94ld9r9s86.apps.googleusercontent.com"
    })

    useEffect(() => {
        if (response?.type === "success"){
            setAccessToken(response.authentication?.accessToken)
        }
    }, [response])

    const getUserData = async () => {
        let UserInfoReposnse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}`}
        })

        UserInfoReposnse.json().then(data => {
            setUserInfo(data)
            console.log(data)
        })
    }

    const showUserData = () => {
        if (userInfo) {
            console.log(userInfo)
            return (
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Text style={{color: "black"}}>{ userInfo.name }</Text>
                    <Image source={{ uri: userInfo.picture }} style={{width: 50, height: 50 }} />
                    <Text style={{color: "black"}}>{ userInfo.email }</Text>
                </View>
            )
        }
    }

    console.log(userInfo)
    if (userInfo) {
        return (
            <View>
                <Text style={{ color: "white" }}>{ userInfo.name }</Text>
                <Text style={{color:"white"}}>{ userInfo.email }</Text>
                <Image source={{ uri: userInfo.picture }} style={{ width: 90, height: 90 }} />
            </View>
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
            <
                Buttons 
                title='Google' 
                leftIcon='google' 
                onPress={accessToken ? getUserData : ()=>promptAsync()}
                />
            <Buttons title='Twitter' leftIcon='twitter' />
        </View>
    )
}

export default Home;
