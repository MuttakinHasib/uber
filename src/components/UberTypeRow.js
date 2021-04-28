import React from "react";
import tailwind from "tailwind-rn";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import AppText from "./ui/AppText";

const UberTypeRow = () => {
  return (
    <TouchableNativeFeedback>
      <View
        style={tailwind(
          "flex-row justify-between items-center  px-5 py-3 border-b border-gray-200"
        )}
      >
        <View style={tailwind("flex-row items-center")}>
          <Image
            source={require("../assets/images/UberX.jpeg")}
            style={[tailwind("h-20 w-20 mr-5"), { resizeMode: "contain" }]}
          />

          <View>
            <View style={tailwind("flex-row items-center")}>
              <AppText variant="label" className="text-gray-700 text-lg">
                Uber X
              </AppText>
              <FontAwesome
                style={tailwind("mx-2")}
                name="user"
                size={20}
                color="black"
              />
              <Text>3</Text>
            </View>
            <Text style={tailwind("text-gray-600 mt-1")}>8:03 dropOff</Text>
          </View>
        </View>
        <View>
          <View style={tailwind("flex-row items-center")}>
            <Ionicons name="pricetags" size={20} color="#10B981" />
            <AppText
              variant="label"
              className="text-gray-700 font-bold text-base mx-2"
            >
              Uber X
            </AppText>
            <AppText
              variant="label"
              className="text-gray-700 font-bold text-base"
            >
              $20
            </AppText>
          </View>
          <Text style={tailwind("text-gray-600 text-right mt-1")}>$20-25</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default UberTypeRow;
