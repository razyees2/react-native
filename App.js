import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { StocksProvider } from "./contexts/StocksContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MenuTabScreen from "./screens/MenuTabScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { MenuContent } from "./screens/MenuContent";
import LandingStackScreen from "./screens/LandingStackScreen";
import { HomeScreen } from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LogInScreen from "./screens/LogInScreen";
import HomeStackScreen from "./screens/MenuTabScreen";
import StocksScreen from "./screens/StocksScreen";
import { Auth } from "./contexts/UserAuth";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App(props) {
  const [token, setToken] = React.useState(null);

  return (
    <View style={styles.container}>
      <StocksProvider>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}

        <NavigationContainer theme={MyTheme}>
          <Drawer.Navigator
            drawerContent={(props) => <MenuContent {...props} />}
          >
            <Drawer.Screen name="HomeMenu" component={MenuTabScreen} />

            {/* Implement for new blank screen here */}
            {/* <Drawer.Screen name="Sign Up" component={Si} /> */}
            <Drawer.Screen name="SignUp" component={SignUpScreen} />
            <Drawer.Screen name="LogIn" component={LogInScreen} />
          </Drawer.Navigator>
          {/* <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
          </Stack.Navigator> */}
        </NavigationContainer>
      </StocksProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
