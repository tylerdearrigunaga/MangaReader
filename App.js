import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./pages/LandingPage";
import {createStackNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createStackNavigator({
  Landing: {
    screen: LandingPage
  }  
}, {
    initialRouteName: "Landing"
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
