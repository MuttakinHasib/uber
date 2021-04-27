import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { CovidMessage, HomeMap, SearchBar } from "../../components";

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      {/* Covid Message */}
      <CovidMessage />
      <SearchBar />
      
    </View>
  );
};

export default HomeScreen;
