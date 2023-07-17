import { Text, StyleSheet, View } from 'react-native';
const Setting = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>You are in the setting's page</Text>
        </View>
    )
}

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
  },
});