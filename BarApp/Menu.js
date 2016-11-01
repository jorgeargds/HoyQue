/**
 * Menu Contents
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight
} from 'react-native'

class Menu extends Component {
   static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  _goToBars(){
    console.log('guat');
  }

  render(){
    const window = Dimensions.get('window');
  
    return (
        <View style={styles.menu}>
          <TouchableHighlight>
            <Text style={styles.fontStyle}>Buscar</Text>
          </TouchableHighlight>

          <TouchableOpacity onPress={() => this.props.onItemSelected('Bares')}>

            <Text style={styles.fontStyle}>Bares</Text>

          </TouchableOpacity>
           <Text style={styles.fontStyle}>Cafeterias</Text>
          
           <Text style={styles.fontStyle}>Restaurantes</Text>
          
           <Text style={styles.fontStyle}>Recomendaciones</Text>
          
        </View>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#0074D9',
   
  },
  fontStyle: {
    color : '#FFFFFF',
    padding: 30
  }
});

export default Menu;