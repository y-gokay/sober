import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import HomeIcon from "../assets/icons/ShortCutHome.png";
import WorkIcon from "../assets/icons/Work.png";
import AddIcon from "../assets/icons/math-plus.png";

const shortcuts = [
  { icon: HomeIcon, label: "Home" },
  { icon: WorkIcon, label: "Work" },
  { icon: AddIcon, label: "Add" },
];

export default function ShortcutList() {
  return (
    <View style={styles.container}>
      {shortcuts.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 8,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  label: {
    fontSize: 14,
    color: "#111",
  },
});
