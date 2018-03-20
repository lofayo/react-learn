import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';
// import Icon from 'react-native-vector-icons/FontAwesome'
import ScrollableTabView,{ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Home
        </Text>
      </View>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Profile
          </Text>
        </View>
        <ScrollableTabView
          tabBarUnderlineStyle={{backgroundColor: '#3C3C3C', height: 2}}
          tabBarInactiveTextColor='#5e6977'
          tabBarActiveTextColor='#3C3C3C'
          tabBarBackgroundColor='#FAFDFF'
          initialPage={0}
          renderTabBar={() => <DefaultTabBar />}
          ref={(tabView) => { this.tabView = tabView }}
        >
          <ShuHuiComic {...this.props}  tabLabel='鼠绘漫画'/>
          <PassionComic  {...this.props} tabLabel='热血漫画'/>
          <DomesticComic {...this.props} tabLabel='国产漫画'/>
        </ScrollableTabView>        
      </View>
    )
  }
}

export default class TabDemo extends Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          selectedTitleStyle={{color: "#3496f0"}}
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          selectedTitleStyle={{color: "#3496f0"}}
          onPress={() => this.setState({selectedTab: 'profile'})}>
          <Profile/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});