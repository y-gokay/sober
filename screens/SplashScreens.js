import React, { useEffect } from "react";
import { View, Image } from "react-native";
import styles from "../styles/SplashScreens.styles";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace("Walkthrough");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/splash_logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}
