import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Button (props) {
    return (
    <TouchableOpacity style={props.style == 'outline' ? styles.btn_outline_primary
    : styles.btn_primary} onPress={props.onPress}>
        {props.children}
    </TouchableOpacity>
    );
}