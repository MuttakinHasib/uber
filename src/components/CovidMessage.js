import React from "react";
import { View, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import { AntDesign } from "@expo/vector-icons";
import AppText from "./ui/AppText";

const CovidMessage = () => {
  return (
    <View style={tailwind("bg-blue-500 px-5 py-3 rounded-t-3xl")}>
      <AppText variant="label" className="text-white">
        Travel only if necessary
      </AppText>
      <AppText variant="body" className="text-gray-100 py-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        labore minus mollitia debitis beatae nemo natus, dignissimos nam quae
        exercitationem!
      </AppText>
      <TouchableOpacity style={tailwind("items-center flex flex-row")}>
        <AppText variant="body" className="text-white font-bold mr-1">
          Learn more
        </AppText>
        <AntDesign name="arrowright" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CovidMessage;
