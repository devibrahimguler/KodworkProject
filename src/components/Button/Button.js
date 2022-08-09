import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./Button.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Button = ({ iconName, text, onPress, disabled }) => {
    return (
        <TouchableOpacity style={!disabled ? styles.active_container : styles.pasive_container} onPress={onPress} disabled={disabled}>
            <Icon name={iconName} size={20} color={"white"} />
            <Text style={styles.text} >{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;