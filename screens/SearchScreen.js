import React, { useState, useEffect } from "react";
import {
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard /* include other react native components here as needed */,
} from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import { scaleSize } from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import { List, Searchbar } from "react-native-paper";

export default function SearchScreen({ navigation }) {
  const [filter, setFilter] = useState([]);
  const { ServerURL, addToWatchlist } = useStocksContext();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const filterSearch = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilter(newData);
      setSearch(text);
    } else {
      setFilter(data);
      setSearch(text);
    }
  };

  const filterSearch2 = (text2) => {
    if (text2) {
      const newData = data.filter((item) => {
        const itemData = item.symbol
          ? item.symbol.toUpperCase()
          : "".toUpperCase();
        const textData = text2.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilter(newData);
      setSearch(text2);
    } else {
      setFilter(data);
      setSearch(text2);
    }
  };

  const addSymbol = (item) => {
    const symb = item.symbol;
    // navigation
    navigation.navigate("Stock", { symbol: symb });
  };

  useEffect(() => {
    const API_KEY = "8240c6eaa5a7bf85bda776f9e0b485a0";
    const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilter(json);
      });

    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View>
          <View>
            <Searchbar
              style={styles.searchbar}
              placeholder="Type a stock symbol"
              onChangeText={(text2) => filterSearch2(text2)}
              value={search}
            />
          </View>
          <TextInput
            style={styles.textin}
            value={search}
            placeholder="Type a company name"
            underlineColorAndroid="transparent"
            onChangeText={(text) => filterSearch(text)}
          />
        </View>
        <View style={{ padding: 24 }}>
          <FlatList
            style={{ height: 600 }}
            data={filter}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 10 }}>
                <Text onPress={() => addSymbol(item)}>{item.symbol}</Text>
                <Text>{item.name}</Text>
              </View>
            )}
            keyExtractor={(item) => item.symbol}
          />
        </View>
        {/* <List>Hello</List> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  textin: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#add8e6",
  },
  // use scaleSize(x) to adjust sizes for small/large screens
});
