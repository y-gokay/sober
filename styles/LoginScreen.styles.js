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
  backButtonContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
  },

  topSection: {
    flexGrow: 1,
  },
  buttonSection: {
    marginBottom: 16,
  },
  bottomSection: {
    alignItems: "center",
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
  smsInfo: {
    fontSize: 12,
    color: "#999",
    marginTop: 10,
    marginBottom: 25,
    textAlign: "left",
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
  phoneContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    height: 55,
  },
  textInput: {
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 0,
  },
});
