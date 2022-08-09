import React, { useEffect } from "react";
import { StyleSheet, FlatList, View, ActivityIndicator, Text } from "react-native";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import JobsCard from "../../components/JobsCard";

const Jobs = ({ navigation }) => {
    const { error, loading, data, fetchData } = useFetch();
    const handleJobsSelect = (jobs) => { navigation.navigate("DetailStackScreen", { jobs }) };
    const renderJobs = ({ item }) => <JobsCard jobs={item} onPress={() => handleJobsSelect(item)} />;
    const keyExtractor = (item, _) => { return item.id.toString() };

    useEffect(() => {
        fetchData(Config.JOBS_URL + "0");
    }, []);

    if (loading) {
        return <ActivityIndicator style={[styles.container, styles.horizontal]} size={"large"} color={"#DD5E56"} />
    }

    if (error) {
        return <Text style={[styles.container, styles.horizontal]} >{error.message}</Text>
    }

    return (
        <View>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderJobs}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        marginBottom: 50
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

export default Jobs;