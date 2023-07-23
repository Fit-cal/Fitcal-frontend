import { StatusBar } from 'expo-status-bar';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from './screens/Setting';
import Top from './screens/Top';
import { FC, useEffect, useState } from 'react';
import { User } from './response_types/GoogleUser';
import axios from 'axios';
import Buttons from './components/buttons/Buttons';
import Input from './components/input/Input';

export type RootStackParamList = {
    Setting: undefined;
    Top: {name: string, picture: string};
  }

WebBrowser.maybeCompleteAuthSession();

const App: FC = () => {

  const [userInfo, setUserInfo] = useState<User>()
  const [accessToken, setAccessToken] = useState<string | undefined>("");


  const Stack = createNativeStackNavigator<RootStackParamList>();

    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: process.env.EXPO_CLIENT_ID,
        expoClientId: process.env.EXPO_CLIENT_ID,
        iosClientId: process.env.IOS_CLIENT_ID,
        androidClientId: process.env.ANDROID_CLIENT_ID 
    })
  const DefaultScreenStyle = {
    headerStyle: {
      backgroundColor: '#000'
    },
    headerTintColor: 'white',
  }


    const getUserData = async () => {
        const userInfoRes = await axios.get(process.env.GOOGLE_OAUTH_API ? process.env.GOOGLE_OAUTH_API : "undefined", {
            headers: { Authorization: `Bearer ${accessToken}`}
        });
        
        // set user info
            setUserInfo(userInfoRes.data)
    }

    
    useEffect(() => {
    if (response && response.type == "success") {
        if (response.authentication && response.authentication.accessToken) {
            setAccessToken(response.authentication.accessToken)
        }
    }
    }, [response])

    if (accessToken && !userInfo) {
      return (
        <View style={styles.userConsent}>
          <Text style={styles.userConsentText}> You have choosen to log in with google in doing so you are choosing to share data from your google account to use this app. </Text>
          <Buttons 
          title='Login in with google' 
          onPress={getUserData} 
          leftIcon='google'
          />
          <Buttons
          title='I do not consent'
          onPress={()=>setAccessToken(undefined)}
          />
        </View>
      )
    }


    if (accessToken && userInfo) {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={DefaultScreenStyle}>
            <Stack.Screen name="Top" component={Top} initialParams={{ name: userInfo.name, picture: userInfo.picture }} options={{ title: "Top" }} />
            <Stack.Screen name="Setting" component={Setting} options={{ title: "Setting" }} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      )
  } 

    return(
        <View style= {styles.container}>
            <Text
                style={{
                    color: "white",
                    fontSize: 30,
                    textAlign: "center",
                    padding: 50,
                    fontWeight: "bold",
                    letterSpacing: 5,
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
                onPress={()=>promptAsync()}
            />
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userConsent: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userConsentText: {
    color: "#cfcfcf",
    width: "80%",
    borderRadius: 5,
    lineHeight: 30,
    padding: 20
  }
});


export default App;