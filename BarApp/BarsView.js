import React, { Component } from 'react';

import
{
	View,
	Text,
	StyleSheet

} from 'react-native'

import AppMenu from './AppMenu';

class BarsView extends Component{

	render(){
		
		return(
			<AppMenu navigator = {this.props.navigator}>
				<Text> BarsView </Text>
			</AppMenu>
	)};
}


export default BarsView;