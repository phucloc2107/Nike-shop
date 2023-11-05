import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />

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