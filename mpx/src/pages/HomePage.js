import React from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import Anticon from 'react-native-vector-icons/AntDesign'
import { StackActions, NavigationActions } from 'react-navigation';
import ScrollableTabView ,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import FacebookTabBar from '../components/FacebookTabBar'
import {Toast} from 'teaset'
import Page3 from './Page3'
import Page4 from './Page4'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '首页',
    headerMode: 'none',
    navBarHidden: true,
    // headerStyle: {
    //   backgroundColor: '#f4511e',
      
    // },
    // headerTintColor: '#1b9fe2',
    headerRight: (
      <View style={{paddingRight:20,}}>
        <Anticon name='search1' size={20} color="#1b9fe2"
          onPress={()=>{
            Toast.sad('搜索功能暂未开放');
          }}
        />
      </View>
    ),
  };
  render() {
    const {navigation} = this.props
    return (
      <ScrollableTabView
        renderTabBar={() => <FacebookTabBar />}
      >
        <Page3 tabLabel="技术心得" navigation={navigation} style={styles.tabView}/>
        <Page4 tabLabel="生活随笔" navigation={navigation} style={styles.tabView}/>
      </ScrollableTabView>
    );
  }  
}

const styles = StyleSheet.create({
  searchBtn:{
    paddingRight:10,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
})
