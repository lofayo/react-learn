// 页面跳转，归根结底还是组件的导航，所以先得生成一个页面目录，即组件导航目录

// 页面目录（组件导航目录）生成器StackNavigator

// 来自react-native的一个函数
import {StackNavigator} from 'react-native'

// StackNavigator 是个函数，返回一个组件
export default StackNavigator({
  // 页面必须是screen组件，而且必须取个名称，后续好导航
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  // 可选配置项
  {
    initialRouteName: 'Home'
  }
})

*******************************************************************************

// 页面跳转

// 每个 组件导航目录 中定义的screen组件都有一个navigation属性
class HomeScreen extends Component{
  render() {
    return (
      <Button 
        title='Go next...'
        {/*navigation属性有个navigate方法，导航到其它组件*/}
        onPress={() => this.props.navigation.navigate('Details')}
      />
    )
  }
}

// 导航，就是在navigation stack里push和pop组件（路由），每次navigate都会push路由
class DetailsScreen extends Component{
  render() {
    return(
      <Button 
        title='Go Details again'
        {/*navigation属性有个navigate方法，导航到其它组件*/}
        onPress={() => this.props.navigation.navigate('Details')}
      />  
      <Button 
        title='Go back'
        {/*navigation属性有个goBack()，pop弹出一个组件*/}
        onPress={() => this.props.navigation.goBack()}
      />  
    )
  }
}

*******************************************************************************

// 导航时传参数(当前页面传参)
this.props.navigation.navigate('RouteName', {paramsObjet})

class HomeScreen extends Component{
  render() {
    return (
      <Button 
        title='Go next...'
        {/*navigation属性有个navigate方法，导航到其它组件*/}
        onPress={() => this.props.navigation.navigate('Details',{
          name: 'lofayo',
          age: 26
        })}
      />
    )
  }
}

// 下一个页面接收参数this.props.navigation.state
class DetailsScreen extends Component{
  render() {
    // 对象就用{}
    const {params} = this.props.navigation.state;
    return(
      <Text>{params.name}</Text>
      <Text>{params.age}</Text>
    )
  }
}

*******************************************************************************
// 导航标题的设置

// 每一个页面导航目录的组件都有一个静态属性navigationOptions
// 是个对象，或者一个函数返回的对象，关于标题的配置选项
class HomeScreen extends Component{
  static navigationOptions={
    title: 'Home'
  }
}

// 每个页面都应该有标题标识配置选项

// 用参数设置标题
class DetailsScreen extends Component{
  static navigationOptions=({navigation, navigationOptions, screenProps}) => {
    // navigation == this.props.navigation
    const {params}=navigation.state;

    return {
      title: params ? params.name : 'A Nested Details Screen',
      // 标题样式参数
      // 整个标题栏
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      // 返回箭头和标题颜色
      headerTintColor: '#fff',
      // 标题的字体样式
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };

  render() {
    return(
      <Button
        title="Update the title"
      {/*更改当前导航页面的参数*/}
        onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
      />
    )
  }
}


*******************************************************************************

// 所有页面共享标题样式
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);