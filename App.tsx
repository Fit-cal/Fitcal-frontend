import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Test from './screens/Test';
import Setting from './screens/Setting';

export default function App() {
  const isLoggedIn = false;
  const Tab = createBottomTabNavigator();
  if (!isLoggedIn) {
    return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
    )
  }
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=> ({
          headerShown: false,
          tabBarStyle:{
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#000',
            position: 'absolute',
            borderTopWidth: 0,
          }
        })}>
          <Tab.Screen name='Test' component={Test} options={{ tabBarBadge: 4 }} />
          <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
