import { StyleSheet, View, Text } from 'react-native';

const Test = () => {
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