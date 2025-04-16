import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigation = useNavigation();

  const suggestions = [
    "Taksim, İstanbul",
    "Kadıköy, İstanbul",
    "Beşiktaş, İstanbul",
    "Üsküdar, İstanbul",
    "Levent, İstanbul",
  ];

  const handleSelect = (address) => {
    setQuery(address);
    setShowResults(false);
    navigation.navigate("MapScreen", { selectedAddress: address });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Ionicons name="search" size={18} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Where do you want to go?"
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            setShowResults(true);
          }}
        />
      </View>

      {showResults && query.length > 1 && (
        <FlatList
          data={suggestions.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.resultList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resultItem}
              onPress={() => handleSelect(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#111",
  },
  resultList: {
    marginTop: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
  },
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});
