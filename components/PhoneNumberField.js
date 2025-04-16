import React from "react";
import { StyleSheet } from "react-native";
import PhoneInput from "react-native-phone-number-input";

export default function PhoneNumberField({ value, onChange }) {
  const phoneInput = React.useRef(null);

  return (
    <PhoneInput
      ref={phoneInput}
      defaultValue={value}
      defaultCode="TR"
      layout="first"
      onChangeText={(text) => onChange(text)}
      containerStyle={styles.phoneContainer}
      textContainerStyle={styles.textInput}
      textInputStyle={{ fontSize: 14 }}
    />
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 55,
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 0,
  },
});
