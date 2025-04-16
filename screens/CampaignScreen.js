import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";
import CampaignPromoCard from "../components/CampaignPromoCard";
import { campaigns } from "../data/data";
import { useNavigation } from "@react-navigation/native";

export default function CampaignsScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <CampaignPromoCard
      campaign={item}
      onPress={() => navigation.navigate("CampaignDetail", { campaign: item })}
    />
  );

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Campaigns</Text>
      </View>
      <FlatList
        data={campaigns}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingLeft: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 16,
    color: "#111",
  },
});
