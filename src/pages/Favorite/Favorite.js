import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStore from "@react-native-async-storage/async-storage";

import { remove_list } from "../../context/FavoriteProvider/favoriteSlice";
import JobsCard from "../../components/JobsCard";

const Favorite = () => {
    const [data, setData] = useState([]);

    const renderFavorite = ({ item }) => <JobsCard jobs={item} onPress={() => handleRemove(item.id)} isButton={true} isFavorite={true} />;
    const dispatch = useDispatch();
    
    function handleRemove(id) {
        dispatch(remove_list(payload = { id: id }));
        getStorage();
    }

    function getStorage() {
        AsyncStore.getItem("@FAVORİTE").then(favSession => {
            if (favSession) {
                setData(JSON.parse(favSession));        
            }
        });
    }

    useEffect(()=>{
        getStorage();
    },[]);

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderFavorite}
            />
        </SafeAreaView>
    );
}

export default Favorite;