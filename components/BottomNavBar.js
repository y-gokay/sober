import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomNavBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (screen) => route.name === screen;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons
          name="home"
          size={20}
          color={isActive("Home") ? "#4B2AEF" : "#aaa"}
        />
        <Text style={[styles.label, isActive("Home") && styles.activeLabel]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate("MyTrips")}
      >
        <Ionicons
          name="car"
          size={20}
          color={isActive("MyTrips") ? "#4B2AEF" : "#aaa"}
        />
        <Text style={[styles.label, isActive("MyTrips") && styles.activeLabel]}>
          My Trips
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate("CampaignScreen")}
      >
        <Ionicons
          name="gift"
          size={20}
          color={isActive("CampaignScreen") ? "#4B2AEF" : "#aaa"}
        />
        <Text
          style={[
            styles.label,
            isActive("CampaignScreen") && styles.activeLabel,
          ]}
        >
          Campaigns
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigation.navigate("Account")}
      >
        <Ionicons
          name="person"
          size={20}
          color={isActive("Account") ? "#4B2AEF" : "#aaa"}
        />
        <Text style={[styles.label, isActive("Account") && styles.activeLabel]}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    alignItems: "center",
  },
  label: {
    fontSize: 11,
    color: "#aaa",
    marginTop: 4,
  },
  activeLabel: {
    color: "#4B2AEF",
    fontWeight: "bold",
  },
});
