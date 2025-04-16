import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton({ style }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back" size={24} color="#111" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },
});
