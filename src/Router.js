import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Jobs from "./pages/Jobs";
import Detail from "./pages/Detail";
import Favorite from "./pages/Favorite";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsStackScreen"
        component={Jobs} options={{
          headerTitle: "Jobs",
          headerTintColor: "#DD5E56"
        }}
      />
      <Stack.Screen
        name="DetailStackScreen"
        component={Detail}
        options={{
          headerTitle: "Implementation Consultant",
          headerTintColor: "#DD5E56"
        }}
      />
    </Stack.Navigator>
  );
}

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Drawer.Screen
          name="Jobs"
          component={JobsStack}
          options={{
            drawerLabel: "Jobs",
            drawerActiveBackgroundColor: "#FAEBEA",
            drawerActiveTintColor: "#DD6056",
          }}
        />
        <Drawer.Screen
          name="Favorite"
          component={Favorite}
          options={{
            drawerLabel: "Favorited Jobs",
            drawerActiveBackgroundColor: "#FAEBEA",
            drawerActiveTintColor: "#DD6056",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;