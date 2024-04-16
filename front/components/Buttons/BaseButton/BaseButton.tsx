import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { commonStyles } from "../../../styles";
import { baseButtonStyles } from "./styles";
import { FC } from "react";
import { BaseButtonProps } from "./types";

export const BaseButton: FC<BaseButtonProps> = ({ onClick, text, style }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={0.6}
      style={[baseButtonStyles.emailBtn, style]}
    >
      <LinearGradient
        style={[commonStyles.button]}
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.5, y: 3.0 }}
        locations={[0, 0.4, 0.8]}
        colors={["#6B2E02", "#BC8f5F", "#6B2E02"]}
      >
        <Text style={[commonStyles.p, baseButtonStyles.emailRegText]}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
