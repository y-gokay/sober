import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import PrimaryButton from "../components/PrimaryButton";
import BackButton from "../components/BackButton";
import RefreshIcon from "../assets/icons/refresh-cw.png";
import { CountryPhoneNumber } from "../utilities/CountryPhoneNumber";
import { UserContext } from "../utilities/UserContext";
import styles from "../styles/PhoneCheckScreen.styles";

const CELL_COUNT = 5;

export default function PhoneCheckScreen({ navigation }) {
  const { userData, updateUser } = useContext(UserContext);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [counter, setCounter] = useState(120);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval;
    if (counter > 0) {
      interval = setInterval(() => setCounter((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [counter]);

  const handleVerify = () => {
    if (value === userData.verificationCode) {
      updateUser({ isVerified: true });
      navigation.navigate("SuccessRegister");
    } else {
      navigation.navigate("FailRegister");
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    setCounter(120);
    setCanResend(false);
  };

  const handleChangePhone = () => {
    navigation.navigate("Register");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <BackButton />
          <TouchableOpacity
            onPress={handleChangePhone}
            style={styles.changePhone}
          >
            <Text style={styles.changePhoneText}>Numaramı Değiştir</Text>
          </TouchableOpacity>

          <Text style={{ textAlign: "center", marginTop: 10, color: "gray" }}>
            Kod: {userData.verificationCode}
          </Text>

          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            We have sent a 5-digit verification code to{" "}
            {CountryPhoneNumber(userData.phoneNumber)}.
          </Text>

          <CodeField
            ref={ref}
            autoFocus
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <PrimaryButton
            title="Verify"
            onPress={handleVerify}
            disabled={value.length !== CELL_COUNT}
          />

          <View style={styles.resendWrapper}>
            <Text style={styles.timerText}>
              {canResend
                ? ""
                : `${Math.floor(counter / 60)}:${String(counter % 60).padStart(
                    2,
                    "0"
                  )} dakika sonra tekrar gönderebilirsiniz`}
            </Text>

            <TouchableOpacity
              onPress={handleResend}
              disabled={!canResend}
              style={styles.refreshContainer}
            >
              <Image
                source={RefreshIcon}
                style={[
                  styles.refreshIcon,
                  { tintColor: canResend ? "#4B2AEF" : "#ccc" },
                ]}
              />
              <Text style={styles.resendLink}>Tekrar gönderin</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
