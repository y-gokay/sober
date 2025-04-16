import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
  },
  optionList: {
    gap: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: "contain",
  },
  optionText: {
    fontSize: 15,
    color: "#111",
  },
});
