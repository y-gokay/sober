import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "./BackButton";

export default function CampaignPromoCard({ campaign, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={campaign.image} style={styles.image} />
        {campaign.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{campaign.badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.title}>{campaign.title}</Text>
      <Text style={styles.description}>{campaign.description}</Text>
      <View style={styles.seeMore}>
        <Text style={styles.seeMoreText}>See Campaign</Text>
        <Ionicons name="arrow-forward" size={16} color="#4B2AEF" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FFEFD7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: "#A05E03",
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginTop: 10,
    marginHorizontal: 14,
  },
  description: {
    fontSize: 13,
    color: "#555",
    marginHorizontal: 14,
    marginVertical: 6,
  },
  seeMore: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingBottom: 14,
    marginTop: 4,
  },
  seeMoreText: {
    fontSize: 13,
    color: "#4B2AEF",
    fontWeight: "bold",
    marginRight: 4,
  },
});
