import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { notifications } from "../data/data";
import styles from "../styles/NotificationScreen.styles";
import Dot from "../assets/icons/circle.png";
import EmptyIllustration from "../assets/Illustration.png";
import BackButton from "../components/BackButton";

export default function NotificationScreen() {
  const hasNotifications = notifications.length > 0;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.row}>
        <Text
          style={[
            styles.title,
            item.isRead ? styles.readTitle : styles.unreadTitle,
          ]}
        >
          {item.title}
        </Text>

        {!item.isRead && <Image source={Dot} style={styles.dot} />}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.pageTitle}>Notifications</Text>

      {hasNotifications ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      ) : (
        <View style={styles.emptyWrapper}>
          <Image source={EmptyIllustration} style={styles.emptyImage} />
          <Text style={styles.emptyTitle}>No Notifications</Text>
          <Text style={styles.emptySubtitle}>You're all caught up!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
