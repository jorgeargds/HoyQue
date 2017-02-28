import React, {Component} from 'react';

import 
{
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions,
	Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView,{DefaultTabBar, } from 'react-native-scrollable-tab-view';


import Perfil from './Perfil'
class BarView extends Component {

	_goBack(){
		this.props.navigator.pop();
	}

	render(){
		const window = Dimensions.get('window');
		const titleConfig = {
   		 title: 'HoyQueApp',
   		 handler: () => this.props.navigator.resetTo({
   		 	title: 'Welcome'
   		 }),
  		};
  		const items = [
			{name: 'Vigorón', price: '$2', key: 1},{name: 'Arepa', price: '$5',	key: 2},{name: 'Funnel cake', price: '$6', key: 3}
		];

		const listItems = items.map((item) =>
			//<TextMenu key={item.key} name={item.name} price={item.price}/>
			<Text key={item.key}>{item.name}...........................{item.price}</Text>
		);

		return(
		<View style={{flex:1}}>
			<NavigationBar
        	title={titleConfig}
        	leftButton={
        	<Icon.Button
	            onPress={() => {this._goBack()}}
	              backgroundColor={"#0074D9"} name={"arrow-back"}>
            </Icon.Button>
        	} 
        	/>
			<ScrollableTabView
		      initialPage={0} // <--- set initialPage 
		      style={{marginTop: 20, }}
		      renderTabBar={() => <DefaultTabBar />}
		    >			
		    	<ScrollView tabLabel="Información" style={styles.tabView}>
			        <View style={styles.card}>
			       	 <Image style={{width:window.width *1,height: window.height*0.25}} 
			        	source={require('../../images/laconcha.jpg')}/>
			          <Text style={{padding: 5}}>La concha de la lora </Text>
			          
			        </View>
		      	</ScrollView>

		      	<ScrollView tabLabel="Menú" style={styles.tabView}>
		        <View style={styles.card}>
				  {listItems}
		        </View>
			      </ScrollView>
			</ScrollableTabView>
		</View>
		  
        	

			);
	}
}
const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 300,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default BarView;