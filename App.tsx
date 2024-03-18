import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './screens/Home';
import StartScreen from './screens/StartScreen';
import Details from './screens/Details';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name= "StarsCreen"
          component={StartScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerStyle:{backgroundColor:'transparent'}
           }}
        />
        <Stack.Screen
        name= "Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerStyle:{backgroundColor:'transparent'},
          headerBackVisible: false,
         }}
        />
        <Stack.Screen
        name= "Details"
        component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;