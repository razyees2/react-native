import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
} from "react-native";

import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";
import HomeScreen from "./HomeScreen";

const LandingStack = createStackNavigator();

const LandingStackScreen = ({ navigation }) => (
  <LandingStack.Navigator>
    <LandingStack.Screen name="Expo" component={HomeScreen} />
    <LandingStack.Screen name="SignUp" component={SignUpScreen} />
    <LandingStack.Screen name="LogIn" component={LogInScreen} />
  </LandingStack.Navigator>
);

export default LandingStackScreen;
