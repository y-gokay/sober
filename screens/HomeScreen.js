import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import ShortCutAdress from "../components/ShortCutAdress";
import Slider from "../components/Slider";
import BottomNavBar from "../components/BottomNavBar";

import { recentTrips, campaigns } from "../data/data";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <SearchBox />
        <ShortCutAdress />
        <Slider
          title="Recent Trips"
          data={recentTrips}
          type="trip"
          onPressItem={(item) =>
            navigation.navigate("TripsDetail", { campaign: item })
          }
        />
        <Slider
          title="Campaigns"
          data={campaigns}
          type="campaign"
          onPressItem={(item) =>
            navigation.navigate("CampaignDetail", { campaign: item })
          }
          onPressSeeAll={() => navigation.navigate("CampaignScreen")}
        />
      </ScrollView>
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingBottom: 100,
  },
});
