import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/WalkthroughScreen.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WalkthroughScreen({ navigation }) {
  const showUsers = async () => {
    const usersData = await AsyncStorage.getItem("users");
    const parsed = JSON.parse(usersData);
    console.log("TÜM USERS:", parsed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <View style={styles.leftColumn}>
          <Image
            source={require("../assets/walkthrough1.png")}
            style={styles.circleLarge}
          />
        </View>
        <View style={styles.rightColumn}>
          <Image
            source={require("../assets/walkthrough2.png")}
            style={styles.circleMedium}
          />
          <Image
            source={require("../assets/walkthrough3.png")}
            style={styles.circleSmall}
          />
        </View>
      </View>
      <Text style={styles.title}>
        The <Text style={styles.highlight}>Driver App</Text> that makes you look
        your best
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <Text style={styles.buttonText}>Let’s Get Started</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}
