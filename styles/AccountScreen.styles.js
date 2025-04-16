import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  driverBox: {
    backgroundColor: "#4B2AEF",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  driverText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e1e11",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  itemText: {
    fontSize: 15,
    color: "#111",
  },
  logout: {
    textAlign: "center",
    fontSize: 15,
    color: "#FF3B30",
    fontWeight: "bold",
    marginTop: 30,
  },
});
