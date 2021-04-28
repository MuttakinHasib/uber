import React from "react";
import { View } from "react-native";
import { HomeMap, UberTypeRow } from "../../components";

const SearchResultScreen = () => {
  return (
    <View>
      <HomeMap />
      <UberTypeRow />
      <UberTypeRow />
      <UberTypeRow />
    </View>
  );
};

export default SearchResultScreen;
