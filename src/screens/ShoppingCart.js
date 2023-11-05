import React from 'react';
import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 $</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>10,00 $</Text>
        </View>

        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>420,00 $</Text>
        </View>
    </View>
)


const ShoppingCart = () => {
    return (
        <>
            <FlatList
                data={cart}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        width: '90%',
        bottom: 30,
        borderRadius: 100,
        alignSelf: 'center',
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    },
})