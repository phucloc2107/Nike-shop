import React from 'react';
import { StyleSheet, Image, FlatList, Pressable } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/productsSlice';

const ProductsScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products)

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        // update selected product
                        dispatch(productsSlice.actions.setSelectedProduct(item.id));

                        navigation.navigate('Product Details')
                    }}
                    style={styles.itemContainer}>
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