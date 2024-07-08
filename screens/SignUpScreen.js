import * as React from "react";
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

const SignUpScreen = ({ navigation }) => {
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
    <View style={styles.signup}>
      <View style={styles.title}>
        <Text style={{ fontWeight: "bold" }}>Signup</Text>
      </View>
      <View>
        <Text>Email: </Text>
        <View>
          <AntDesign name="mail" color="#00AEE6" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textinput}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={styles.text}>
        <Text>Username: </Text>
        <View>
          {sign.check_textChange ? (
            <Icon name="person" color="#00AEE6" size={20} />
          ) : null}
          <TextInput
            placeholder="Your Username"
            style={styles.textinput}
            autoCapitalize="none"
            onChange={(val) => textChange(val)}
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
          title="Sign Up"
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
export default SignUpScreen;

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
