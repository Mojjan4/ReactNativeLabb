import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FetchData from './components/FetchData/Fetchdata';
import Index from './components/Device/Index';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calender from './components/Calender/Calender';

//Drawer that works in ios and android. 
const Drawer = createDrawerNavigator();

export default function App() {
  const scheme = useColorScheme();

    return (
      <AppearanceProvider>
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}> 
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Drink and food recipe" component={FetchData}/>
            <Drawer.Screen name="Device" component={Index}/>
            <Drawer.Screen name="About" component={About}/>
            <Drawer.Screen name="Calender" component={Calender}/>
          </Drawer.Navigator>
        </NavigationContainer>   
      </AppearanceProvider>
    );
  }





