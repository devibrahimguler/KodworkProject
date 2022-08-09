import React from "react";
import Router from "./Router";
import FavoriteProvider from "./context/FavoriteProvider";

const Wrapper = () => {
    return (
        <FavoriteProvider>
            <Router />
        </FavoriteProvider>
    );
}

export default Wrapper;