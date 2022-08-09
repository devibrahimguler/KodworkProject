import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import styles from "./JobsCard.style";
import Remove from "../Remove";

const JobsCard = ({ jobs, onPress, isButton = false, isFavorite = false }) => {
    return (
        <TouchableWithoutFeedback key={jobs.id} onPress={onPress} disabled={isFavorite}>
            <View style={styles.container} >
                <Text style={styles.name} >{jobs.name}</Text>
                <Text style={styles.company} >{jobs.company.name}</Text>
                <View style={styles.inner_container}>
                    <Text style={styles.locations} >{jobs.locations[0].name}</Text>
                </View>
                <Text style={styles.levels} >{jobs.levels[0].name}</Text>
                {isButton && <Remove onPress={onPress} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default JobsCard;