import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 100,
    paddingBottom: 20,
    justifyContent: "space-between",
  },
  topSection: {
    flexGrow: 1,
  },
  buttonSection: {
    marginTop: 16,
  },
  bottomSection: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  bottomText: {
    textAlign: "center",
    fontSize: 13,
    color: "#333",
  },
  linkText: {
    color: "#4B2AEF",
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 12,
    color: "#D00",
    marginTop: -12,
    marginBottom: 10,
    paddingLeft: 5,
  },
});
