import React, { Component } from 'react';

import
{
	View,
	Text,
	StyleSheet,
	AsyncStorage
} from 'react-native'

import AppMenu from '../components/AppMenu';

class Welcome extends Component{
	constructor(props) {
    super(props);
    this.state = { userEmail: ''}
	}
  	//Se llama dos veces debido al this.state ERROR se obtiene el usuario conectado al app
	async _getUser(){
	var myToken
 	myToken =  await AsyncStorage.getItem('token');
 	
    return fetch('http://192.168.86.108:8080/api/token',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token' : myToken
      },
      body: JSON.stringify({
        token: myToken
      })
   })
    .then((response) => response.json())
    .then((responseJson) => {
    	if(this.state.userEmail == '')
    		this.setState({userEmail: responseJson.user.email}) 
    })
    .catch((error) => {
      console.error(error);
    });
  }

	render(){
		//this._getUser();
		return(
			<AppMenu navigator = {this.props.navigator}>
     
				<Text> Welcome {this.state.userEmail}</Text>
        
			</AppMenu>
	)};
}


export default Welcome;
