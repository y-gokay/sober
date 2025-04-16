import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Logo from "../assets/HeaderLogo.png";
import NotificationIcon from "../assets/NotificationBell.png";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Image source={NotificationIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4B2AEF",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 28,
    resizeMode: "contain",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
