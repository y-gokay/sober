import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import InputArea from "../components/InputArea";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../styles/VehicleRegisterScreen.style";
import BackButton from "../components/BackButton";
import { UserContext } from "../utilities/UserContext";

export default function VehicleRegisterScreen() {
  const navigation = useNavigation();
  const { updateUser, userData, addUser } = useContext(UserContext);
  const [plateNumber, setPlateNumber] = useState("");
  const [gearType, setGearType] = useState("automatic");

  const handleSubmit = () => {
    const verificationCode = Math.floor(
      10000 + Math.random() * 90000
    ).toString();

    updateUser({
      plateNumber,
      gearType,
      verificationCode,
      isVerified: false,
    });

    addUser({
      ...userData,
      plateNumber,
      gearType,
      verificationCode,
    });

    navigation.navigate("PhoneCheck");
  };

  const handleChangePhone = () => {
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <BackButton />

          <TouchableOpacity
            onPress={handleChangePhone}
            style={styles.changePhone}
          >
            <Text style={styles.changePhoneText}>Change Phone Number</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Vehicle Information</Text>
          <Text style={styles.label}>Gear Type</Text>

          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={gearType}
              onValueChange={(itemValue) => setGearType(itemValue)}
            >
              <Picker.Item label="Automatic" value="automatic" />
              <Picker.Item label="Manual" value="manual" />
              <Picker.Item label="Semi-automatic" value="semi" />
            </Picker>
          </View>

          <InputArea
            placeholder="Plate Number (e.g. 34 ABC 123)"
            value={plateNumber}
            onChangeText={setPlateNumber}
          />

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              title="Continue"
              onPress={handleSubmit}
              disabled={!plateNumber}
            />
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
