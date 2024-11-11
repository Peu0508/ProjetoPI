import React from 'react';
import {Text,ImageBackground,SafeAreaView,StatusBar,View,Image,StyleSheet } from 'react-native';
import COLORS from '../../const/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Routes from '../../routes';

import { Feather as Icon } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Home from '../Home';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';




const Perfil = () => {

  const navigation = useNavigation();

  function handleNavigateToInicio() {

    navigation.navigate('Inicio');

  }

  
  return (

    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.background} />
      <View style={{height: 400, backgroundColor: COLORS.background}}>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
          </View>

          <Image source={require('../../assets/person.jpg')}
          style={{height: 200,
            width: 200,
            borderRadius: 25,
            padding:0,
            margin:0,
            alignSelf:"center",
            }}>

        </Image>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
              {'Usuário'}
            </Text>
            
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 12, color: COLORS.dark}}>{''}</Text>
            <Text style={{fontSize: 13, color: COLORS.dark}}>{''}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
          <FontAwesome name="map-marker" size={20} color="black" />
            <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
              Av. Rio Branco, Recife.
            </Text>
          </View>
        </View>
      </View>

      {/* Comment container */}
      <View style={{marginTop: 80, justifyContent: 'space-between', flex: 1}}>
        <View>
          {/* Render user image , name and date */}
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Image
              source={require('../../assets/person.jpg')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{color: COLORS.dark, fontSize: 12, fontWeight: 'bold'}}>
                Usuário
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 11,
                  fontWeight: 'bold',
                  marginTop: 2,
                }}>
                Dono
              </Text>
            </View>
            <Text style={{color: COLORS.grey, fontSize: 12}}>25 de Maio de 2024</Text>
          </View>
          <Text style={style.comment}>
            Meu emprego necessita que eu me mude para outro país. Eu não tenho como levar o gato comigo e estou procurando por uma boa pessoa que possa cuidar do Lily.
          </Text>
        </View>

        {/* Render footer */}
        <View style={style.footer}>
          
          <View style={style.iconCon}>
          <FontAwesome name="gear" size={24} color="white" />
          </View>
          <View style={style.btn}>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              Editar Informações
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});

export default Perfil;