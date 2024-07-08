import * as React from "react";
import {
  Platform,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.splash}>
      <View style={styles.header}>
        <View style={styles.image}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.by1}>IFN666 Stocks</Text>
        </View>
        <View>
          <Text style={styles.by2}>By Rajesh</Text>
        </View>
        <View style={styles.backgrn}>
          <View>
            <Text style={styles.descTitle}>Description</Text>
          </View>
          <View>
            <Text style={styles.descText}>
              The development of this app is to make the stock information
              easily available to the mobile devices.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  by1: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    paddingBottom: 10,
  },
  by2: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  backgrn: {
    backgroundColor: "#add8e6",
    padding: 20,
  },
  descTitle: {
    fontSize: 20,
    paddingBottom: 15,
  },
  //   logo: {
  //     width: width_logo,
  //     height: height_logo,
  //   },
});
