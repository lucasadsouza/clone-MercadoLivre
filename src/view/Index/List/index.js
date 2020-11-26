import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, Alert } from 'react-native';

import styles from './styles';

function Item ({ item }) {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {Alert.alert('You touched an item')}}
        >
            <Image style={styles.picture} source={{ uri: item.picture }}/>

            <View style={styles.title}>
                <Text style={styles.item_title}>
                    {item.name}
                </Text>

                <Text style={styles.item_price}>
                    R$ {item.price.toFixed(2)}
                </Text>

                <Text style={styles.item_subdivision}>
                    Parcelado em 12 x <Text style={styles.item_subdivision_detach}>
                        R$ {(item.price / 12).toFixed(2)}
                    </Text>
                </Text>

                <Text>
                    {item.condition}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default function List () {
    const listProduct = [
        {
            id: '2',
            name: 'TV',
            price: 1250.27,
            condition: 'Novo',
            picture: 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-23-r0ld-amd-ryzen-5-12gb-1tb-156-windows-10/magazineluiza/227606500/1fed9b7ebf42874de7f34c4a7f925dd4.jpg',
        },
        {
            id: '1',
            name: 'TV',
            price: 1250.27,
            condition: 'Novo',
            picture: 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-23-r0ld-amd-ryzen-5-12gb-1tb-156-windows-10/magazineluiza/227606500/1fed9b7ebf42874de7f34c4a7f925dd4.jpg',
        },
        {
            id: '3',
            name: 'TV',
            price: 1250.27,
            condition: 'Novo',
            picture: 'https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-3-a315-23-r0ld-amd-ryzen-5-12gb-1tb-156-windows-10/magazineluiza/227606500/1fed9b7ebf42874de7f34c4a7f925dd4.jpg',
        },
    ];

    return (
        <>
            <Text style={styles.text_results}>
                Produtos encontrados: {listProduct.length}
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={listProduct}
                    renderItem={({ item }) => (<Item item={item} />)}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </>
    );
}