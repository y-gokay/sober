import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
    marginBottom: 30,
  },
  item: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: "#111",
  },
  unreadTitle: {
    fontWeight: "bold",
  },
  readTitle: {
    fontWeight: "normal",
  },
  dot: {
    width: 10,
    height: 10,
    resizeMode: "contain",
  },
  emptyWrapper: {
    alignItems: "center",
    marginTop: 100,
  },
  emptyImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111",
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#777",
  },
});
