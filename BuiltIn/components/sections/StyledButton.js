import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles";

export const StyledButton = ({ title, onPress, type = "primary", icon }) => (
  <TouchableOpacity
    style={[
      styles.styledButton,
      type === "secondary" && styles.styledButtonSecondary,
    ]}
    onPress={onPress}
  >
    {icon && (
      <MaterialIcons
        name={icon}
        size={24}
        color={type === "primary" ? "white" : "#3498db"}
        style={styles.buttonIcon}
      />
    )}
    <Text
      style={[
        styles.styledButtonText,
        type === "secondary" && styles.styledButtonTextSecondary,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
