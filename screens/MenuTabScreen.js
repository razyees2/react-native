import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import SearchScreen from "./SearchScreen";
import StocksScreen from "./StocksScreen";
import LandingStackScreen from "./LandingStackScreen";
import SignUpScreen from "./SignUpScreen";
import LogInScreen from "./LogInScreen";

const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();
const LandingStack = createStackNavigator();
const SignStack = createStackNavigator();
const StockStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MenuTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#FF0000",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={MenuStackScreen}
      options={{
        tabBarLabel: "LogIn",
        tabBarColor: "#0000FF",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-menu" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: "Search",
        tabBarColor: "#008000",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Stock"
      component={StocksScreen}
      options={{
        tabBarLabel: "Stock",
        tabBarColor: "#6A0DAD",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-trending-up" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MenuTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Expo",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const MenuStackScreen = ({ navigation }) => (
  <MenuStack.Navigator>
    <MenuStack.Screen
      name="SignUp"
      component={LogInScreen}
      options={{
        title: "Log In",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={30}
            color="#fff"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </MenuStack.Navigator>
);

// const SignUpStack = ({ navigation }) => (
//   <SignStack.Navigator>
//     <SignStack.Screen
//       name="SignUp"
//       component={SignUpScreen}
//       options={{
//         title: "Sign Up",
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={30}
//             color="#fff"
//             onPress={() => navigation.openDrawer()}
//           ></Icon.Button>
//         ),
//       }}
//     />
//   </SignStack.Navigator>
// );
