import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CampaignCards({
  image,
  badge,
  title,
  description,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{description}</Text>
        </View>

        <TouchableOpacity style={styles.linkWrapper} onPress={onPress}>
          <Text style={styles.linkText}>See Campaign</Text>
          <Ionicons name="arrow-forward" size={16} color="#4B2AEF" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 16,
    paddingBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#FFD700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111",
    marginTop: 10,
    paddingHorizontal: 12,
  },
  descriptionBox: {
    marginHorizontal: 12,
    marginTop: 8,
    padding: 10,
    borderRadius: 6,
  },
  description: {
    fontSize: 13,
    color: "#666",
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 12,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4B2AEF",
    marginRight: 4,
  },
});
