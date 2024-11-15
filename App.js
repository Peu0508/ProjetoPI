import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

import DetailsScreen from './src/pages/Detalhes/Detalhes';
import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  return (
<>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </>
  
  );
}
