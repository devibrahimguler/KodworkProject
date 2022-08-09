import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
        marginBottom: 50
    },
    header_container:{
        height: 125,
    },
    body_container: {
        flex: 1,
    },
    footer_container: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    header: {
        color: "#3A464E",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
    },
    decription: {
        color: "#3A464E",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginVertical: 5,
    },
    
});