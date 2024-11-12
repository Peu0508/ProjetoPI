import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from "@expo/vector-icons";

import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Detalhes from './pages/Detalhes/Detalhes';
import Perfil from './pages/Perfil';
import Detalhes2 from './pages/Detalhes2/Detalhes2';


const AppStack = createStackNavigator();

const Routes = () => {

    return(

        <NavigationContainer>
        <AppStack.Navigator
         
        screenOptions={{
            headerShown : false,
        
          cardStyle: {
            backgroundColor: '#f0f0f5'
          }
        }}
        >
            <AppStack.Screen name = 'Home' component={Home}></AppStack.Screen>
            <AppStack.Screen name = 'Inicio' component={Inicio}></AppStack.Screen>
            <AppStack.Screen name = 'Detalhes' component = {Detalhes}></AppStack.Screen>
            <AppStack.Screen name = 'Detalhes2' component = {Detalhes2}></AppStack.Screen>
            <AppStack.Screen name = 'Perfil' component = {Perfil}></AppStack.Screen>
        </AppStack.Navigator>
    </NavigationContainer>

    );

    
};

export default Routes;

