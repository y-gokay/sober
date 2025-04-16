import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/AfterRegisterScreen.style";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

export default function FailScreen() {
  const navigation = useNavigation();

  const handleTryAgain = () => {
    navigation.navigate("Walkthrough");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icons/alert-octagon-red.png")}
        style={styles.icon}
      />
      <Text style={styles.title}>Register Failed</Text>
      <Text style={styles.description}>
        Lorem ipsum sit dolor met, Lorem ipsum sit dolor met, Lorem ipsum sit
        dolor met.
      </Text>
      <View style={styles.buttonWrapper}>
        <PrimaryButton title="Home" onPress={handleTryAgain} />
      </View>
    </View>
  );
}
