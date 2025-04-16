import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    justifyContent: "center",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  leftColumn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  rightColumn: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  circleLarge: {
    width: 160,
    height: 380,
    borderRadius: 80,
  },
  circleMedium: {
    width: 150,
    height: 220,
    borderRadius: 65,
    marginBottom: 10,
  },
  circleSmall: {
    width: 160,
    height: 160,
    borderRadius: 65,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    color: "#4B2AEF",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4B2AEF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    color: "#333",
  },
  loginLink: {
    color: "#4B2AEF",
    fontWeight: "bold",
  },
});
