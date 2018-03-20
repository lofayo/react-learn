<<<<<<< HEAD
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import placeholder from './image/4.jpg';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class FlatListDemo extends Component {
  render() {
    return(
      <FlatList
        data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text>{item.key}</Text>}
      />
=======
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Image, FlatList, SectionList, Alert} from 'react-native';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image4 from './images/4.jpg';
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{
            backgroundColor: 'pink',
            height: 30,
            borderWidth: 10,
            borderColor: 'red',
            padding: 20
          }}
          onChangeText={ (text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 30}}>
          {this.state.text.split(' ').map( (word) => word && '*').join(' ')}
        </Text>
      </View>
    )
  }
}

class ScrollViewDemo extends Component {
  render() {
    return (
      <ScrollView style={{display: 'flex'}}>
        <Text style={{fontSize: 20, color: 'green', textAlign: 'center', fontWeight: 'bold', padding: 10}}>This is a ScrollView Component</Text>
        <Image source={image1} />
        <Image source={image2} />
        <Image style={{alignSelf: 'center'}} source={image4} />
      </ScrollView>
    )
  }
}

class FlatListDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {name: 'lofayo'},
            {name: 'luofangyong'},
          ]}
          renderItem={({item}) => <Text key={item.name} style={styles.item}>{item.name}</Text>}
        />
        <SectionList
          sections={[
            {title: 'pen name', data: ['lofyo', 'lofy', 'fofo']},
            {title: 'true name', data: ['luofangyong']}
          ]}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>    
>>>>>>> b25a522790421dd084ffd5af60757e531c313950
    )
  }
}

<<<<<<< HEAD

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state={movies: []};
  }

  componentDidMount() {
    let moviesURL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

    fetch(moviesURL)
      .then(response => response.json())
      .then(responseJson => {
        return this.setState({movies: responseJson.movies});
=======
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'green'
  },
  item: {
    padding: 5,
    color: 'blue',
    marginLeft: 20
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  movieTitle: {
    color: 'blue',
    fontSize: 20,
  },
  movieYear: {
    fontFamily: 'Georgia, serif', 
    color: 'green'
  },
  movieDes: {
    color: '#000',
    fontSize: 12, 
    backgroundColor: 'pink',
    height: 40,
    lineHeight: 40
  },
  movieText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'skyblue',
    borderStyle: 'dotted',
    marginBottom: 5
  }
});

// 这个组件还不能正常运行，不知bug何在
class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      header:'',
      des: '',
      movies: []
    };
  }


  // 在组件挂载后，将数据填充到对应的组件中
  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          header: responseJson.title,
          des: responseJson.description,
          movies: responseJson.movies
        })
>>>>>>> b25a522790421dd084ffd5af60757e531c313950
      })
  }

  render() {
<<<<<<< HEAD
    return(
      <FlatList
        style={styles.container}
        data={this.state.movies}
        renderItem={({item}) => {
          return(
            <View style={styles.movieItem}>
              <Image
                style={styles.moviePoster}
                source={{uri: /.gif$/.test(item.posters.thumbnail) ? 'http://fb.topitme.com/b/3b/1a/11266050750a71a3bbo.jpg' : item.posters.thumbnail}} 
              />
              <View style={styles.movieDesc}>
                <View style={styles.movieDescItem}>
                  <Text style={styles.descTitle}>电影名：</Text>
                  <Text>{item.title}</Text>
                </View>
                <View style={styles.movieDescItem}>
                  <Text style={styles.descTitle}>发行时间：</Text>
                  <Text>{item.year ? item.year : '***'}</Text>
                </View>
                <View style={styles.movieDescItem}>
                  <Text style={styles.descTitle}>具体发行时间：</Text>
                  <Text>{item.release_dates.theater ? item.release_dates.theater : '***'}</Text>
                </View>
                <View style={styles.movieDescItem}>
                  <Text style={styles.descTitle}>观众评分：</Text>
                  <Text>{item.ratings.audience_score ? item.ratings.audience_score : '***'}</Text>
                </View>
                <View style={styles.movieDescItem}>
                  <Text style={styles.descTitle}>时长：</Text>
                  <Text>{item.runtime ? item.runtime : '***'}</Text>
                </View>
              </View>
            </View>
          ) 
        }}
      />
=======
    return (
      <View>
        <Text style={styles.header}>{this.state.header}</Text>
        <FlatList
          data={this.state.movies}
          renderItem={({item}) => {
            return (
              <View style={styles.movieText}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieYear}>{item.releaseYear}</Text>
              </View>
            )}}
        />
        <Text
          onPress={() => Alert.alert(
            'Alert Title',
            'hello',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )}
          style={styles.movieDes}
        >{this.state.des}</Text>
      </View>
>>>>>>> b25a522790421dd084ffd5af60757e531c313950
    )
  }
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    color: '#000'
  },
  movieItem: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginTop: 20,
    marginBottom: 20,
    padding: 20
  },
  moviePoster: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red'
  },
  movieDesc: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20
  },
  movieDescItem: {
    flexDirection: 'row'
  },
  descTitle: {
    fontWeight: 'bold',
    fontSize: 14
  }
})

export default MoviesList;
=======
class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        {this.props.lists.map((item) => {
          return (
            <View style={styles.moviesBox}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieYear}>{item.releaseYear}</Text>
            </View> 
          )
        })}
      </View>    
    )
  }
}


export default FetchDemo;

/*
// <ListItem lists={this.state.movies} />       

*/
>>>>>>> b25a522790421dd084ffd5af60757e531c313950
