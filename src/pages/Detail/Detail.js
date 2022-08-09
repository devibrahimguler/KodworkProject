import React from "react";
import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';
import styles from "./Detail.style";
import { useDispatch, useSelector } from "react-redux";
import { add_list } from "../../context/FavoriteProvider/favoriteSlice";

import Description from "../../components/Description";
import Button from "../../components/Button";

const Detail = ({ route }) => {
    const dispatch = useDispatch();
    const list = useSelector((select) => select.favorite.favoriteJobs)
    const { jobs } = route.params;
    const runFirst = `
      document.body.style.backgroundColor = 'white';
    `;

    function handleAdd() {
        dispatch(add_list(payload = { item: jobs }));
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header}>Implementation Consultant</Text>
                <Description title={"Locations: "} subtitle={jobs.locations[0].name} />
                <Description title={"Job Level: "} subtitle={jobs.levels[0].name} />
                <Text style={styles.decription}>Job Detail</Text>
            </View>
            <View style={styles.body_container}>
                <WebView
                    source={{ html: jobs.contents }}
                    injectedJavaScript={runFirst}
                />
            </View>
            <View style={styles.footer_container}>
                <Button iconName={"logout"} text={"Submit"} onPress={handleAdd} disabled={false} />
                <Button iconName={"heart"} text={"Favorite Job"} onPress={handleAdd} disabled={list.some((i) => { return i.id === jobs.id })} />
            </View>
        </View>
    );
}

export default Detail;