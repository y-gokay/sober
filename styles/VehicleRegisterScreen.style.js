import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    marginTop: 12,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 30,
  },
  changePhone: {
    position: "absolute",
    top: 55,
    right: 20,
    zIndex: 10,
  },
  changePhoneText: {
    color: "#4B2AEF",
    fontWeight: "bold",
    fontSize: 14,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
  },
});
