import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const HomeMap = () => {
  return (
    <View style={tailwind("justify-center items-center h-80")}>
      <Text>I am Map</Text>
    </View>
  );
};

export default HomeMap;
