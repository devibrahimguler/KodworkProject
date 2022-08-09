import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#C4C4C4",
    },
    inner_container: {
        backgroundColor: "#DD5E56",
        padding: 10,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
    },
    company: {
        fontSize: 15,
        marginBottom: 5,
    },
    locations: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    levels: {
        color: "#DD5E56",
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: "flex-end",
    },
});