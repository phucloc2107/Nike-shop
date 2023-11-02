import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ProductsScreen />

      <StatusBar hidden />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})