import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const FavoriteProvider = ({ children }) => {
    return (
        <Provider store={store}>{children}</Provider>
    );
}

export default FavoriteProvider;