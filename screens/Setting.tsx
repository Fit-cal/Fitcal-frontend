import { Text, StyleSheet, View, Button } from 'react-native';
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>

export interface NavigationProps {
  navigation: RootStackNavigationProp
}

const Setting:FC<NavigationProps> = ({ navigation }) => {

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