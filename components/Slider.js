import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TripCard from "./TripsCards";
import CampaignCard from "./CampaignCards";

export default function Slider({
  title,
  data,
  type = "trip",
  onPressItem,
  onPressSeeAll,
}) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPressSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) =>
          type === "trip" ? (
            <TripCard
              key={index}
              date={item.date}
              time={item.time}
              from={item.from}
              fromInfo={item.fromInfo}
              to={item.to}
              toInfo={item.toInfo}
              price={item.price}
              status={item.status}
            />
          ) : (
            <CampaignCard
              key={index}
              image={item.image}
              badge={item.badge}
              title={item.title}
              description={item.description}
              onPress={() => onPressItem?.(item)}
            />
          )
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111",
  },
  seeAll: {
    fontSize: 13,
    color: "#4B2AEF",
    fontWeight: "bold",
  },
});
