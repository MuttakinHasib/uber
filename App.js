import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StatusBar as AndroidSafeArea,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import {
  DestinationSearchScreen,
  HomeScreen,
  SearchResultScreen,
} from "./src/screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFP-regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFP-semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFP-medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SFP-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
      {/* <DestinationSearchScreen /> */}
      {/* <SearchResultScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? AndroidSafeArea.currentHeight : 0,
  },
});
