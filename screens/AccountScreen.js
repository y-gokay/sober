import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/AccountScreen.styles";
import BackButton from "../components/BackButton";
import BottomNavBar from "../components/BottomNavBar";

export default function AccountScreen() {
  const navigation = useNavigation();

  const logout = () => {
    navigation.navigate("Walkthrough");
  };

  const handleNavigation = (label) => {
    if (label === "Personal Information") {
      navigation.navigate("PersonalInfoScreen");
    }
  };

  return (
    <View style={styles.wrapper}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.driverBox}>
          <Text style={styles.driverText}>Do you want to be a driver ?</Text>
        </TouchableOpacity>

        <Section
          title="Personal"
          items={[
            {
              label: "Personal Information",
              icon: require("../assets/icons/user.png"),
            },
            {
              label: "Change Password",
              icon: require("../assets/icons/lock.png"),
            },
            {
              label: "Addresses",
              icon: require("../assets/icons/map-pin.png"),
            },
          ]}
          onItemPress={handleNavigation}
        />

        <Section
          title="Payment"
          items={[
            {
              label: "Payment Methods",
              icon: require("../assets/icons/credit-card.png"),
            },
            {
              label: "Bills and Receipts",
              icon: require("../assets/icons/file-text.png"),
            },
          ]}
        />

        <Section
          title="Contact"
          items={[
            {
              label: "Contact Prefferences",
              icon: require("../assets/icons/user-check.png"),
            },
            {
              label: "Change Language",
              icon: require("../assets/icons/globe.png"),
            },
            {
              label: "Contracts",
              icon: require("../assets/icons/file.png"),
            },
          ]}
        />

        <Section
          title="Support"
          items={[
            {
              label: "FAQ",
              icon: require("../assets/icons/help-circle.png"),
            },
            {
              label: "Help Center",
              icon: require("../assets/icons/phone-call.png"),
            },
          ]}
        />

        <TouchableOpacity>
          <Text style={styles.logout} onPress={logout}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
}

const Section = ({ title, items, onItemPress }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.item}
        onPress={() => onItemPress?.(item.label)}
      >
        <Image source={item.icon} style={styles.icon} />
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);
