import { View, Text } from 'react-native';
import Buttons from '../components/buttons/Buttons';
import Input from '../components/input/Input';


const Home = () => {
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

            <Input placeholder='Username' leftIcon='user' />
            <Input placeholder='Password' leftIcon='lock' />
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
            <Buttons title='Google' leftIcon='google' />
            <Buttons title='Twitter' leftIcon='twitter' />
        </View>
    )
}

export default Home;
