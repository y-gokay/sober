import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 160,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginTop: 50,
    marginBottom: 16,
    textAlign: "left",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  bottomButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#4B2AEF",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  codeBox: {
    borderColor: "#4B2AEF",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#4B2AEF",
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  codeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  copyHint: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
});
