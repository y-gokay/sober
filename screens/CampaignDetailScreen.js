import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import BackButton from "../components/BackButton";
import styles from "../styles/CampaignDetailScreen.style";
import { Ionicons } from "@expo/vector-icons";

export default function CampaignDetailScreen() {
  const { campaign } = useRoute().params;
  const [buttonState, setButtonState] = useState("join");
  const [code, setCode] = useState("");

  const handlePress = () => {
    if (buttonState === "join") {
      setButtonState("generate");
    } else if (buttonState === "generate") {
      const randomCode = Math.random()
        .toString(36)
        .substring(2, 7)
        .toUpperCase();
      setCode(randomCode);
      setButtonState("code");
    }
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(code);
    Alert.alert("Copied!", `${code} copied to clipboard.`);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <BackButton />

        <Text style={styles.title}>{campaign.title}</Text>

        <Image source={campaign.image} style={styles.image} />

        <Text style={styles.sectionTitle}>Participation Conditions</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sem
          sit amet nulla congue facilisis.
        </Text>

        <Text style={styles.sectionTitle}>Other Terms</Text>
        <Text style={styles.description}>
          Donec euismod, nisi vel consectetur tincidunt, nisl nunc tincidunt
          nisi, nec tincidunt nunc nisl nec nisi.
        </Text>
      </ScrollView>

      <View style={styles.bottomButton}>
        {buttonState === "code" ? (
          <TouchableOpacity onPress={handleCopy} style={styles.codeBox}>
            <View style={styles.codeRow}>
              <Ionicons
                name="copy-outline"
                size={20}
                color="#fff"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.codeText}>{code}</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>
              {buttonState === "join" ? "Join" : "Generate Code"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
