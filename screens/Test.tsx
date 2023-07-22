import { StyleSheet, View, Text, Image} from 'react-native';
import { User } from '../response_types/GoogleUser';

const Test = (props: {user: User}) => {
    return(
            <View>
                <Text style={{ color: "white" }}>Username: { props.user.name }</Text>
                <Text style={{color:"white"}}>Email: { props.user.email }</Text>
                <Image source={{ uri: props.user.picture }} style={{ width: 90, height: 90 }} />
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