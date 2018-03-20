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
    )
  }
}


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
      })
  }

  render() {
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
    )
  }
}

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