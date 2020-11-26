import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import Navigation from './Navigation';
import LogoMP from '../../assets/mercado_pago.png';
import Profile from '../../components/Profile';

const Drawer = createDrawerNavigator();

const HeaderDrawer = () => {
    return (
        <View style={styles.drawer_header}>
            <View style={styles.user}>
                <Profile />

                <View>
                    <Text>Olá Joaquim</Text>
                    <Text>Nível 3 - Mercado Ponto</Text>
                </View>
            </View>
            <View style={styles.mercado_pago}>
                <Image source={LogoMP} />
                <Text style={styles.mercado_pago_text}>Mercado Pago</Text>
            </View>
        </View>
    );
}

const DrawerContent = () => {
    const listMenuDrawer = [
        {
            id: 1,
            name: 'Home',
            action: 'Main',
            icon: <AntDesign name="home" size={24} color="#000" />
        },
        {
            id: 2,
            name: 'Procurar',
            action: 'List',
            icon: <AntDesign name="search1" size={24} color="#000" />
        }
    ];

    return (
        <View style={styles.drawer_content}>
            <HeaderDrawer />

            <View style={styles.drawer_body}>
                <DrawerContentScrollView>
                    {listMenuDrawer.map((menu) => (
                        <DrawerItem
                            label={menu.name}
                            key={menu.id}
                            icon={() => menu.icon}
                            onPress={() => {navigation.navigate(menu.action)}}
                        />
                    ))}
                </DrawerContentScrollView>
            </View>
        </View>
    );
}

export default function Index ({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={DrawerContent}>
            <Drawer.Screen
                name="Navigation"
                component={Navigation}
            />
        </Drawer.Navigator>
    );
}