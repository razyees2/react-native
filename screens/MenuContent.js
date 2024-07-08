import * as React from "react";
import { Platform, StyleSheet, View, StatusBar, Button } from "react-native";
import { Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LandingStackScreen from "./LandingStackScreen";
import SignUpScreen from "./SignUpScreen";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalTok } from "../components/global";

export function MenuContent(props) {
  const { getItem, setItem } = useAsyncStorage("@storage_key");

  // removeValue = async () => {
  //   try {
  //     await useAsyncStorage.removeItem("@storage_key");
  //   } catch (e) {
  //     // clear error
  //   }
  //   console.log("Done.");
  // };

  const removeValue = () => {
    GlobalTok.token = "";
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.menuContent}>
          <View style={styles.header}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                paddingBottom: 20,
              }}
            >
              Menu
            </Text>
          </View>

          <View style={styles.header}>
            <Button
              style={styles.signup}
              title="Sign Up"
              onPress={() => {
                props.navigation.navigate("SignUp");
              }} // need to change the route.
            />
          </View>
          <View style={styles.header}>
            <Button
              style={styles.login}
              title="Log In"
              onPress={() => {
                props.navigation.navigate("LogIn");
              }} // need to change the route.
            />
          </View>
          <Drawer.Section style={styles.menuitems}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomlogout}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => removeValue()}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContent: {
    flex: 1,
  },
  header: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    fontSize: 20,
  },
  bottomlogout: {
    marginBottom: 10,
    borderTopColor: "#fff",
    borderTopWidth: 1,
    color: "#000000",
  },
  menuContent: {
    paddingTop: 15,
  },
  menuitems: {
    paddingTop: 20,
  },
});
