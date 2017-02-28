import React, { Component} from 'react';

import
{
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Dimensions
} from 'react-native'

import {Card, CardTitle, CardImage, CardAction, CardContent } from 'react-native-card-view';

import AppMenu from '../components/AppMenu';
import Button from 'react-native-button';



class BarsView extends Component{
	
	 _handlePress(){

        this.props.navigator.push({
            title: 'Bar'
        });
     }

	render(){
		const window = Dimensions.get('window');
		const card = {card: {  borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da'}};

		return(
			<AppMenu navigator = {this.props.navigator}>
				<Card styles = {card}>
			        <CardContent>
			        	<Text style = {{textAlign: 'left', fontWeight: 'bold'}}>La concha de la lora</Text>
			        </CardContent>
			        <CardImage>
			        	<Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			        </CardImage>
			        <CardAction >
			          <Button
			            style={styles.button}
			            onPress={() => {this._handlePress()}}>
			            Ver
			          </Button>
			          
			        </CardAction>
      			</Card>
      			<Card styles = {card}>
			        <CardContent>
			        	<Text style = {{textAlign: 'left', fontWeight: 'bold'}}>La concha de la lora</Text>
			        </CardContent>
			        <CardImage>
			        	<Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			        </CardImage>
			        <CardAction >
			          <Button
			            style={styles.button}
			            onPress={() => {this._handlePress()}}>
			            Ver
			          </Button>
			          
			        </CardAction>
      			</Card>
      			<Card styles = {card}>
			        <CardContent>
			        	<Text style = {{textAlign: 'left', fontWeight: 'bold'}}>La concha de la lora</Text>
			        </CardContent>
			        <CardImage>
			        	<Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			        </CardImage>
			        <CardAction >
			          <Button
			            style={styles.button}
			            onPress={() => {this._handlePress()}}>
			            Ver
			          </Button>
			          
			        </CardAction>
      			</Card>
      			<Card styles = {card}>
			        <CardContent>
			        	<Text style = {{textAlign: 'left', fontWeight: 'bold'}}>La concha de la lora</Text>
			        </CardContent>
			        <CardImage>
			        	<Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			        </CardImage>
			        <CardAction >
			          <Button
			            style={styles.button}
			            onPress={() => {this._handlePress()}}>
			            Ver
			          </Button>
			          
			        </CardAction>
      			</Card>
      			<Card styles = {card}>
			        <CardContent>
			        	<Text style = {{textAlign: 'left', fontWeight: 'bold'}}>La concha de la lora</Text>
			        </CardContent>
			        <CardImage>
			        	<Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			        </CardImage>
			        <CardAction >
			          <Button
			            style={styles.button}
			            onPress={() => {this._handlePress()}}>
			            Ver
			          </Button>
			          
			        </CardAction>
      			</Card>
			</AppMenu>
	)};
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
 }
 });


export default BarsView;