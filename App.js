import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}

      <ProductDetailsScreen />

      <StatusBar hidden />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
})