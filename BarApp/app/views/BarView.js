import React, {Component} from 'react';

import 
{
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView,{DefaultTabBar, } from 'react-native-scrollable-tab-view';
import TextMenu from '../components/TextMenu';

import Perfil from './Perfil'
class BarView extends Component {

	_goBack(){
		this.props.navigator.pop();
	}

	render(){
		const titleConfig = {
   		 title: 'HoyQueApp',
  		};
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
			          <Text>Friends</Text>
			        </View>
		      	</ScrollView>

		      	<ScrollView tabLabel="Menú" style={styles.tabView}>
		        <View style={styles.card}>
		          <TextMenu name="gg" price="$2"/>
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
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export default BarView;