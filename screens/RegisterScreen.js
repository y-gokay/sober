import React, { useRef, useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import InputArea from "../components/InputArea";
import BackButton from "../components/BackButton";
import styles from "../styles/RegisterScreen.styles";
import { CountryPhoneNumber } from "../utilities/CountryPhoneNumber";
import PhoneNumberField from "../components/PhoneNumberField";
import { UserContext } from "../utilities/UserContext";

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});
  const { updateUser } = useContext(UserContext);

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "Lütfen adınızı giriniz.";
    if (!lastName.trim()) newErrors.lastName = "Lütfen soyadınızı giriniz.";
    if (!phoneNumber.trim())
      newErrors.phoneNumber = "Telefon numarası giriniz.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      updateUser({
        firstName,
        lastName,
        phoneNumber: CountryPhoneNumber(phoneNumber),
      });
      navigation.navigate("VehicleRegister");
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
              <Text style={styles.title}>Personal information</Text>
              <Text style={styles.subtitle}>
                Sign up to be a part of this world full of advantages
              </Text>

              <InputArea
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              {errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}

              <InputArea
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
              {errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}

              <PhoneNumberField value={phoneNumber} onChange={setPhoneNumber} />
              {errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <Text style={styles.smsInfo}>
                We’ll send you a 5-digit verification code.
              </Text>
            </View>

            <View style={styles.buttonSection}>
              <PrimaryButton title="Continue" onPress={handleContinue} />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
