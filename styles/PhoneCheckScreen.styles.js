import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },

  codeFieldRoot: {
    marginBottom: 20,
    justifyContent: "center",
  },

  cell: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  focusCell: {
    borderColor: "#4B2AEF",
  },

  cellText: {
    fontSize: 24,
    color: "#111",
  },

  resendWrapper: {
    marginTop: 30,
    alignItems: "center",
  },

  timerText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },

  refreshContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
  },

  refreshIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  resendLink: {
    color: "#4B2AEF",
    fontWeight: "bold",
    fontSize: 14,
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
});
