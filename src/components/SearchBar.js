import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";
import AppText from "./ui/AppText";

const SearchBar = () => {
  return (
    <>
      <View
        style={tailwind(
          "m-2 my-3 bg-gray-100 p-3 flex-row justify-between items-center"
        )}
      >
        <AppText variant="label" className="flex-1 mr-10">
          Where to?
        </AppText>
        <View style={tailwind("rounded-full overflow-hidden")}>
          <TouchableNativeFeedback onPress={() => alert("hi")}>
            <View
              style={tailwind(
                "bg-white px-3 py-1 rounded-full flex-row justify-between items-center"
              )}
            >
              <Feather name="clock" size={20} color="black" />
              <Text style={tailwind("mx-2")}>Now</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>

      <TouchableNativeFeedback>
        <View
          style={tailwind(
            "flex-row items-center px-5 py-3 border-b border-gray-200"
          )}
        >
          <View
            style={tailwind(
              "w-10 h-10 rounded-full bg-blue-500 justify-center items-center mr-3"
            )}
          >
            <Ionicons name="ios-home" size={20} color="white" />
          </View>
          <AppText variant="label" className="text-gray-700 text-lg">
            Home
          </AppText>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback>
        <View
          style={tailwind(
            "flex-row items-center px-5 py-3 border-b border-gray-200"
          )}
        >
          <View
            style={tailwind(
              "w-10 h-10 rounded-full bg-gray-100 justify-center items-center mr-3"
            )}
          >
            <AntDesign name="clockcircle" size={20} color="black" />
          </View>
          <AppText variant="label" className="text-gray-700 text-lg">
            Spin Nightclub
          </AppText>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

export default SearchBar;
