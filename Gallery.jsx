// src/Gallery.js
import React from 'react';
import {View, StyleSheet, Image, FlatList, SafeAreaView} from 'react-native';

const images = [
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
  require('./asset/SEMWAL.jpeg'),
];

const Gallery = () => {
  const renderItem = ({item}) => <Image source={item} style={styles.image} />;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default Gallery;
