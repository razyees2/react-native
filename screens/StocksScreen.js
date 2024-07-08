import React, { useState, useEffect } from "react";
import {
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View /* include other react-native components here as needed */,
} from "react-native";
import { useStocksContext } from "../contexts/StocksContext";
import { scaleSize } from "../constants/Layout";
import { Column } from "ag-grid-community";
import PureChart from "react-native-pure-chart";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StocksScreen({ route, navigation }) {
  const { ServerURL, watchList } = useStocksContext();
  const [data, setData] = useState([]);
  const [state, setState] = useState({
    /* FixMe: initial state here */
  });

  const { symbol } = route.params ? route.params : "IBM";
  const symboll = symbol ? JSON.stringify(symbol) : "IBM";
  const symb = symboll ? symboll.replace(/['"]+/g, "") : "IBM";

  const symbo = AsyncStorage.setItem("key", symb);

  const sy = AsyncStorage.getItem(JSON.stringify("key"));

  let hor = [];
  let ver = [];
  var sampleData;

  const addSymbol = (item) => {
    symb = item.symbol;
  };

  const addSymbol2 = (item) => {
    symb = item.symbol;
  };

  useEffect(() => {
    const API_KEYS = "8240c6eaa5a7bf85bda776f9e0b485a0";

    let newUrl = `https://financialmodelingprep.com/api/v3/historical-price-full/${symb}?apikey=${API_KEYS}`;
    // FixMe: fetch stock data from the server for any new symbols added to the watchlist and save in local StocksScreen state

    fetch(newUrl)
      .then((response) => response.json())
      .then((json) => json["historical"])
      .then((json) => {
        setState(json);
        setData(json);
      });
  }, [watchList]);

  hor = data.map((item) => {
    return item.date;
  });

  ver = data.map((item) => {
    return item.close;
  });

  var chartData = data.map((item) => {
    return { x: item.date, y: item.close };
  });

  const layout = { title: "My cool chart!" };

  return (
    <View style={styles.container}>
      {/* FixMe: add children here! */}
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.container}>
          <View style={{ padding: 24 }}>
            <FlatList
              style={{ height: 60 }}
              data={state}
              initialNumToRender={1}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.list1}>
                  <Text style={styles.sym}>
                    {symb + "                    "}
                    <Text style={styles.close}>
                      {item.close + "              "}
                    </Text>
                    <Text
                      style={{
                        backgroundColor:
                          Math.sign(item.changePercent) === -1
                            ? "red"
                            : "green",
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        color: "white",
                      }}
                    >
                      {item.changePercent + "%"}{" "}
                    </Text>
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.date}
            />
          </View>

          <View style={styles.chart}>
            <PureChart
              data={chartData}
              type="line"
              height={150}
              width={"100%"}
            />
          </View>

          <View style={styles.secondList}>
            <FlatList
              style={{ height: 500 }}
              data={state}
              initialNumToRender={1}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <Text style={styles.sym1} onPress={() => {}}>
                    {symb}
                  </Text>
                  <View style={styles.first}>
                    <Text style={styles.close1}>
                      {"Close: " + item.close + "          "}
                      <Text style={styles.low1}>{"Low: " + item.low}</Text>
                    </Text>
                  </View>
                  <View style={styles.second}>
                    <Text style={styles.open1}>
                      {"Open: " + item.open + "          "}
                      <Text style={styles.high1}>{"High: " + item.high}</Text>
                    </Text>

                    <Text style={styles.volume1}>
                      {"Volume: " + item.volume}{" "}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.date}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  list1: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#add8e6",
  },
  sym: {
    padding: 20,
  },
  close: {
    paddingLeft: 100,
    paddingRight: 100,
  },
  perc: {
    paddingLeft: 50,
  },
  vew: {
    paddingLeft: 40,
  },
  secondList: {
    marginTop: 10,
    height: 250,
    textAlign: "center",
  },
  sym1: {
    marginTop: 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  close1: {
    paddingVertical: 20,
    paddingLeft: 100,
    borderBottomWidth: 1,
  },
  open1: {
    paddingVertical: 20,
    paddingLeft: 100,
    borderBottomWidth: 1,
  },
  low1: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingHorizontal: 50,
    //width: 50 * "%",
  },
  high1: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingVertical: 20,
    paddingHorizontal: 50,
    // width: 50 * "%",
  },
  volume1: {
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "center",
  },
  chart: {
    // paddingTop: 50,
    // height: 40,
  },
});
