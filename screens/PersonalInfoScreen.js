import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import styles from "../styles/PersonalInfoScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../utilities/UserContext";

export default function PersonalInfoScreen() {
  const navigation = useNavigation();
  const { userData } = useContext(UserContext);

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <BackButton style={styles.backButton} />
        <Text style={styles.headerTitle}>Personal Info</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-outline" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../assets/w_logo.png")}
            style={styles.avatar}
          />
          <TouchableOpacity>
            <Text style={styles.changePhoto}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        <InfoRow label="First Name" value={userData.firstName} />
        <InfoRow label="Last Name" value={userData.lastName} />
        <InfoRow label="Email" value={"ygokay@example.com"} />
        <InfoRow label="Phone" value={userData.phoneNumber} />
        <InfoRow label="Birth Date" value={"12.05.1998"} />
        <InfoRow label="T.C." value={"3414412342"} />
        <InfoRow label="Gender" value={"Erkek"} />

        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete My Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
