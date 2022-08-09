import React from "react";
import { View , Text} from "react-native";
import styles from "./Description.style";

const Description = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

export default Description;