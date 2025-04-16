import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Locate from "../assets/icons/Locate.png";
import Location from "../assets/icons/location-fill.png";
import Money from "../assets/icons/Subtract.png";

export default function TripCards({
  date,
  time,
  from,
  to,
  fromInfo,
  toInfo,
  price,
  status,
  onPress,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.locationRow}>
        <Image source={Locate} style={styles.dot} />
        <View>
          <Text style={styles.address}>{from}</Text>
          {fromInfo && <Text style={styles.info}>{fromInfo}</Text>}
        </View>
      </View>

      <View style={styles.locationRow}>
        <Image source={Location} style={styles.dot} />
        <View>
          <Text style={styles.address}>{to}</Text>
          {toInfo && <Text style={styles.info}>{toInfo}</Text>}
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.priceWrapper}>
          <Image source={Money} style={styles.icon} />
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    borderRadius: 12,
    backgroundColor: "#fff",
    padding: 16,
    marginRight: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  date: {
    fontSize: 13,
    color: "#888",
  },
  time: {
    fontSize: 13,
    color: "#888",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 12,
    height: 12,
    marginRight: 10,
    resizeMode: "contain",
  },
  address: {
    fontSize: 15,
    color: "#111",
  },
  info: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginRight: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4B2AEF",
  },
  status: {
    fontSize: 13,
    backgroundColor: "#ECFCE5",
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: "#4B2AEF",
    fontWeight: "bold",
  },
});
