import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Remove.style";
const Remove = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container} >
                <Text style={styles.text} >Remove</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Remove;