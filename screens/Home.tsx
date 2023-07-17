import { View, Text } from 'react-native';
import Buttons from '../components/buttons/Buttons';
import Input from '../components/input/Input';
import Requests, { Url } from '../requests/Requests';


const Home = () => {
    const verify = async () => {
        const auth = await Requests.get(Url.AUTH, "/callback");
        console.log(auth);
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
            <Buttons title='Google' leftIcon='google' onPress={verify} />
            <Buttons title='Twitter' leftIcon='twitter' />
        </View>
    )
}

export default Home;
