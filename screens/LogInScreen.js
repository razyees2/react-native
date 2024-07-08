import * as React from "react";
import { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalTok } from "../components/global";

const LogInScreen = ({ navigation }) => {
  const [value, setValue] = useState("value");
  const { getItem, setItem } = useAsyncStorage("@storage_key");

  const readItemFromStorage = async () => {
    const item = await getItem();
    GlobalTok.token = item;
    setValue(item);
  };

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const [sign, setSign] = React.useState({
    email: "",
    username: "",
    password: "",
    check_textChange: false,
    secureTextEntry: true,
  });

  const textChange = (val) => {
    if (val.length != 0) {
      setSign({
        ...sign,
        email: val,
        check_textChange: true,
      });
    } else {
      setSign({
        ...sign,
        email: val,
        check_textChange: false,
      });
    }
  };

  return (
    <View style={styles.login}>
      {GlobalTok.token != null ? (
        <View style={{ margin: 40 }}>
          <Text style={{ fontSize: 20 }}>Welcome: {value}</Text>
        </View>
      ) : (
        <View style={styles.title}>
          <Text>Log In</Text>
        </View>
      )}
      <View style={styles.text}>
        <Text>Email or Username: </Text>
        <View>
          {sign.check_textChange ? (
            <Icon name="person" color="#00AEE6" size={20} />
          ) : null}
          <TextInput
            placeholder="Your Username or email"
            style={styles.textinput}
            autoCapitalize="none"
            onChangeText={(val) => writeItemToStorage(val)}
          />
        </View>
        <View style={styles.pass}>
          <Text>Password: </Text>
          <View>
            <AntDesign name="lock" color="#00AEE6" size={20} />
            <TextInput
              placeholder="Your Password "
              secureTextEntry={true}
              style={styles.textinput}
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          style={styles.signup}
          title="Log In"
          onPress={() => {
            navigation.navigate("Home");
          }} // need to change the route.
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#add8e6",
  },
  title: {
    padding: 20,
  },
  text: {
    padding: 20,
  },
  pass: {
    padding: 20,
  },
  bot: {
    paddingTop: 30,
  },
});
