import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "../styles/LoginScreen.styles";
import PrimaryButton from "../components/PrimaryButton";
import PhoneNumberField from "../components/PhoneNumberField";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utilities/UserContext";
import BackButton from "../components/BackButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CountryPhoneNumber } from "../utilities/CountryPhoneNumber";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { users, updateUser, setUsers } = useContext(UserContext);
  const navigation = useNavigation();

  const handleContinue = async () => {
    const normalizedPhone = CountryPhoneNumber(phoneNumber);
    const matchedUserIndex = users.findIndex(
      (user) => user.phoneNumber === normalizedPhone
    );

    if (matchedUserIndex === -1) {
      Alert.alert("Login Failed", "This phone number is not registered.");
      navigation.navigate("FailLogin");
    } else {
      const verificationCode = Math.floor(
        10000 + Math.random() * 90000
      ).toString();

      const updatedUser = {
        ...users[matchedUserIndex],
        verificationCode,
        isVerified: false,
      };

      updateUser(updatedUser);
      const updatedUsers = [...users];
      updatedUsers[matchedUserIndex] = updatedUser;
      setUsers(updatedUsers);
      await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));

      navigation.navigate("PhoneCheckLogin");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <BackButton />

            <View style={styles.topSection}>
              <Text style={styles.title}>Welcome to Sober Driver</Text>
              <Text style={styles.subtitle}>
                Please enter your phone number to continue
              </Text>

              <PhoneNumberField value={phoneNumber} onChange={setPhoneNumber} />

              <Text style={styles.smsInfo}>
                We will send you a verification code via SMS to the number you
              </Text>
            </View>

            <View style={styles.buttonSection}>
              <PrimaryButton
                title="Login"
                onPress={handleContinue}
                disabled={!phoneNumber}
              />
            </View>

            <View style={styles.bottomSection}>
              <Text style={styles.bottomText}>
                Don’t have an account?{" "}
                <Text
                  style={styles.linkText}
                  onPress={() => navigation.navigate("Register")}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
