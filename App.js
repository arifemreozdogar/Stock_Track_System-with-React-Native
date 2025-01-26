import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screens/HomeScreen';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={"Ana Sayfa"}>
        <Drawer.Screen name="Ana Sayfa" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
