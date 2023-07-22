import { StyleSheet, View, Text } from 'react-native';
import { User } from '../response_types/GoogleUser';

const Test = (props: {user: User}) => {
    return(
        <View style={ styles.container }>
            <Text style={{color:"white"}}>You are logging in </Text>
        </View>
    )
}

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
});