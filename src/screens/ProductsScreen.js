import React from 'react';
import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products';

const ProductsScreen = ({ navigation }) => {
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable style={styles.itemContainer} onPress={() => navigation.navigate('Product Details')}>
                    <Image source={{ uri: item.image }} style={styles.img} />
                </Pressable>
            )}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1
    },
    img: {
        width: '100%',
        aspectRatio: 1
    },
})

export default ProductsScreen;