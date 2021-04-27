import React from "react";
import { Text } from "react-native";
import tailwind from "tailwind-rn";

const body = () => ({
  fontFamily: "SFP-regular",
  ...tailwind("text-base text-gray-600"),
});

const label = () => ({
  fontFamily: "SFP-medium",
  opacity: 0.9,
  ...tailwind("text-xl"),
});

const caption = () => ({
  fontFamily: "SFP-bold",
  opacity: 0.8,
  ...tailwind("text-3xl my-8"),
});

const error = () => ({
  fontFamily: "SRP-regular",
  ...tailwind("text-base text-red-400"),
});

const variants = {
  body,
  label,
  caption,
  error,
};

const AppText = ({ variant, className, styles, children }) => {
  return (
    <Text style={[variants[variant](), tailwind(className), styles]}>
      {children}
    </Text>
  );
};

export default AppText;
