import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  backButton: {
    position: "relative",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    flex: 1,
    textAlign: "center",
    marginRight: 40, // settings ikonu için boşluk bırak
  },
  settingsButton: {
    position: "absolute",
    right: 20,
    top: 50,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  avatarWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePhoto: {
    color: "#4B2AEF",
    fontWeight: "bold",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 6,
  },
  label: {
    fontSize: 16,
    color: "#888",
  },
  value: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  deleteButton: {
    marginTop: 40,
    alignItems: "center",
  },
  deleteText: {
    color: "#D00",
    fontWeight: "bold",
  },
});
