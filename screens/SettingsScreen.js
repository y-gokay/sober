import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/SettingsScreen.styles";
import BackButton from "../components/BackButton";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Settings</Text>
      </View>

      <View style={styles.optionList}>
        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Image
              source={require("../assets/icons/user.png")}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Personal Information</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Image
              source={require("../assets/icons/phone-call.png")}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Change Phone Number</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.left}>
            <Image
              source={require("../assets/icons/mail.png")}
              style={styles.icon}
            />
            <Text style={styles.optionText}>Change Email Address</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
