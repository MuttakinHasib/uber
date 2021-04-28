import React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tailwind from "tailwind-rn";
import { Feather } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const { width } = Dimensions.get("window");

const DestinationSearchScreen = () => {
  return (
    <View style={tailwind("p-5 h-full bg-gray-500")}>
      <TextInput
        style={[
          tailwind("bg-gray-100 h-10 px-4 py-3 mb-4 font-bold"),
          { marginRight: 45 },
        ]}
        placeholder="Enter pick-up location"
        autoCapitalize="none"
      />
      <View style={tailwind("flex-row items-center")}>
        <TextInput
          style={tailwind("flex-1 mr-5 bg-gray-100 h-10 px-4 py-3 font-bold")}
          placeholder="Where to?"
          autoCapitalize="none"
        />
        <TouchableOpacity>
          <Feather name="plus" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyCY65KL1pjWFmlTBt05BGAGe8b_s1VVoYw",
          language: "en",
        }}
      />
    </View>
  );
};

export default DestinationSearchScreen;
