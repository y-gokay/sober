import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SlideUpPanel({ currentLocation, selectedAddress }) {
  return (
    <View style={styles.panel}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={24} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Yolculuğunuzu Planlayın</Text>
        </View>

        <View style={styles.locationBox}>
          <Ionicons name="navigate" size={18} color="#4B2AEF" />
          <Text style={styles.locationText}>
            {currentLocation || "Mevcut Konum"}
          </Text>
        </View>

        <View style={styles.rowWithAdd}>
          <View style={styles.locationBoxFlex}>
            <Ionicons name="location" size={18} color="#4B2AEF" />
            <Text style={styles.locationText}>
              {selectedAddress || "Hedef Konum Seç"}
            </Text>
          </View>
          <TouchableOpacity style={styles.plusIcon}>
            <Ionicons name="add-circle-outline" size={24} color="#4B2AEF" />
          </TouchableOpacity>
        </View>

        <View style={styles.shortcuts}>
          <TouchableOpacity style={styles.shortcut}>
            <Ionicons name="home" size={16} color="#4B2AEF" />
            <Text style={styles.shortcutText}>Ev</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcut}>
            <Ionicons name="briefcase" size={16} color="#4B2AEF" />
            <Text style={styles.shortcutText}>İş</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcut}>
            <Ionicons name="add" size={16} color="#4B2AEF" />
            <Text style={styles.shortcutText}>Ekle</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Son Aramalar</Text>
        <View style={styles.recentList}>
          <Text style={styles.recentItem}>Kadıköy, İstanbul</Text>
          <Text style={styles.recentItem}>Levent, İstanbul</Text>
        </View>

        <Text style={styles.sectionTitle}>Ödeme Yöntemi</Text>
        <View style={styles.paymentBox}>
          <Ionicons name="card" size={18} color="#4B2AEF" />
          <Text style={styles.paymentText}>Kredi Kartı</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    elevation: 15,
  },
  content: {
    paddingBottom: 100,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
  locationBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  locationBoxFlex: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  rowWithAdd: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  plusIcon: {
    padding: 4,
  },
  shortcuts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shortcut: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  shortcutText: {
    marginLeft: 6,
    color: "#4B2AEF",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 8,
  },
  recentList: {
    marginBottom: 20,
  },
  recentItem: {
    fontSize: 13,
    color: "#444",
    marginBottom: 4,
  },
  paymentBox: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 30,
  },
  paymentText: {
    fontSize: 14,
    color: "#333",
  },
  button: {
    backgroundColor: "#4B2AEF",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
