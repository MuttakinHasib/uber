import React from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";
import tailwind from "tailwind-rn";

const HomeMap = () => {
  return (
    <MapView
      style={tailwind("justify-center items-center h-80 bg-blue-100")}
    ></MapView>
  );
};

export default HomeMap;
