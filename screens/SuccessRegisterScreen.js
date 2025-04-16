import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/AfterRegisterScreen.style";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

export default function SuccessRegisterScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/check-circle-green.png")}
        style={styles.icon}
      />
      <Text style={styles.title}>Register Success</Text>
      <Text style={styles.description}>
        Lorem ipsum sit dolor met, Lorem ipsum sit dolor met, Lorem ipsum sit
        dolor met.
      </Text>
      <View style={styles.buttonWrapper}>
        <PrimaryButton title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}
