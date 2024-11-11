import React, { useState } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Home from '../Home';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Routes from '../../routes';

import COLORS from '../../const/colors';




const Inicio = () => {

  const navigation = useNavigation();

  function handleNavigateToDetalhes() {

    navigation.navigate('Detalhes');

  }

  function handleNavigateToPerfil(){

    navigation.navigate('Perfil');
  }

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.headerInicio}>
        
        <Icon name="menu" size={28} />
        <Text style={{color: '#fffff', fontWeight: 'bold', fontSize: 16}}>
          Usuário
        </Text>
        <RectButton onPress={handleNavigateToPerfil}>

        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 30, width: 30, borderRadius: 25}}
          
        />
          
        </RectButton>
        
      </View>

        <View style = {styles.iconBar}>
        
        <RectButton style={styles.buttonBar}>
            <View style={styles.buttonIcon}>
              <Text>

              <FontAwesome5 name="cat" size={24} color="black" />
                
              </Text>
            </View>
          </RectButton>

          <RectButton style={styles.buttonBar}>
            <View style={styles.buttonIcon}>
              <Text>

              <MaterialCommunityIcons name="dog" size={32} color="black" />
                
              </Text>
            </View>
          </RectButton>

          <RectButton style={styles.buttonBar}>
            <View style={styles.buttonIcon}>
              <Text>

              <FontAwesome5 name="kiwi-bird" size={24} color="black"/>
                
              </Text>
            </View>
          </RectButton>

          <RectButton style={styles.buttonBar}>
            <View style={styles.buttonIcon}>
              <Text>

              <MaterialCommunityIcons name="rabbit" size={32} color="black" />
                
              </Text>
            </View>
          </RectButton>

        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={styles.searchInputContainer}>
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Pesquise por um pet para adotar."
              style={{flex: 1}}
            />
            <FontAwesome name="sort-asc" size={24} color="black" />
          </View>
        </View>

        <View style={styles.cardContainer}>

        <RectButton style={styles.cardImageContainer} onPress={handleNavigateToDetalhes}>
          <Image style={{

            width: '100%',
            height: '100%',
            resizeMode: 'contain',

          } 
              } source={require('../../assets/cat1.png')}></Image>
        </RectButton>

        <View style={styles.cardDetailsContainer}>

          <Text style={styles.descriptionName}>Lily</Text>
          <Text style={styles.descriptionText}>Chausie</Text>
          <Text style={styles.descriptionText}>5 Anos</Text>
          <Text style={styles.descriptionText}>
          <FontAwesome style={styles.mapIcon} name="map-marker" size={16} color="black" />Recife</Text>
          
        </View>
          
        </View>

        {/* CARDS */}

        <View style={styles.cardContainer}>

        <RectButton style={styles.cardImageContainer}>
          <Image style={{

            width: '100%',
            height: '100%',
            resizeMode: 'contain',

          }
              } source={require('../../assets/bird1.png')}></Image>
        </RectButton>

        <View style={styles.cardDetailsContainer}>

        <Text style={styles.descriptionName}>Coco</Text>
          <Text style={styles.descriptionText}>Papagaio</Text>
          <Text style={styles.descriptionText}>2 Anos</Text>
          <Text style={styles.descriptionText}>
          <FontAwesome style={styles.mapIcon} name="map-marker" size={16} color="black"/>Recife</Text>
            
        </View>
          
        </View>

        <View style={styles.cardContainer}>

        <RectButton style={styles.cardImageContainer}>
          <Image style={{

            width: '100%',
            height: '100%',
            resizeMode: 'contain',

          }
              } source={require('../../assets/cat2.png')}></Image>
        </RectButton>

        <View style={styles.cardDetailsContainer}>

        <Text style={styles.descriptionName}>Lucy</Text>
          <Text style={styles.descriptionText}>Bobtail</Text>
          <Text style={styles.descriptionText}>2 Anos</Text>
          <Text style={styles.descriptionText}>
          <FontAwesome style={styles.mapIcon} name="map-marker" size={16} color="black"/>Recife</Text>
            
        </View>
  
        </View>

        <View style={styles.cardContainer}>

        <RectButton style={styles.cardImageContainer}>
          <Image style={{

            width: '100%',
            height: '100%',
            resizeMode: 'contain',

          }
              } source={require('../../assets/dog1.png')}></Image>
        </RectButton>

        <View style={styles.cardDetailsContainer}>

        <Text style={styles.descriptionName}>Bally</Text>
          <Text style={styles.descriptionText}>Pastor Alemão</Text>
          <Text style={styles.descriptionText}>2 Anos</Text>
          <Text style={styles.descriptionText}>
          <FontAwesome style={styles.mapIcon} name="map-marker" size={16} color="black"/>Recife</Text>
            

        </View>
          

        </View>
        
         
            
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor:  '#f0f0f5',
  },
  

  headerInicio: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


  main: {
    flex: 1,
    justifyContent: 'space-between',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  iconBar:{
    flexDirection:'row',
    backgroundColor:'#D9D9D9',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',


  },

  descriptionName: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
    fontWeight:'bold',
  },

  descriptionText: {
    color: '#6C6C80',
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
    
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#f0f0f5',
    height: 60,
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 0,
  },

  buttonBar: {
    backgroundColor: 'D9D9D9',
    height: 60,
    width:60,
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 0,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

    header: {
      paddingTop:0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainContainer: {
      flex: 1,
      backgroundColor: COLORS.light,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 40,
      
    },
    searchInputContainer: {
      height: 50,
      backgroundColor: COLORS.white,
      borderRadius: 7,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    categoryBtn: {
      height: 50,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    categoryBtnName: {
      color: COLORS.dark,
      fontSize: 10,
      marginTop: 5,
      fontWeight: 'bold',
    },
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    cardDetailsContainer: {
      height: 120,
      backgroundColor: COLORS.white,
      flex: 1,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      padding: 20,
      justifyContent: 'center',
    },
    cardImageContainer: {
      height: 150,
      width: 140,
      backgroundColor: COLORS.background,
      borderRadius: 20,
    },

    mapIcon:{
      marginRight:5,
    },
  });


export default Inicio;

