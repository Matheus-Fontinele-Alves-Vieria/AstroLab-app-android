import * as React from 'react';
import { Image, View, KeyboardAvoidingView, Alert, TouchableOpacity } from 'react-native';
import { css } from '../../assets/css/Css';

export default function Home() {


  return (
    <View style={css.container1}>
    	<KeyboardAvoidingView style={css.container2}>
	      <View style={css.view_home1}>
	      	<Image style={css.foguete} source={require('../../assets/images/Foguete.png')}/>
	      	<Image style={css.aninha} source={require('../../assets/images/Astronauta_Aninha.png')}/>
	   	</View> 
	</KeyboardAvoidingView>
    </View>
  );
}
