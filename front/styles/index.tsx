import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
    minHeight: "100%",
  },
  p: {
    fontSize: 26,
    lineHeight: 28,
    fontFamily: "TriodPostnaja",
    margin: 0,
    padding: 0,
    color: "#552600",
  },
  button: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontFamily: "TriodPostnaja",
  },
  input: {
    height: 40,
    borderRadius: 10,
    fontSize: 17,
    fontFamily: "TriodPostnaja",
    backgroundColor: "#fae6b4",
    borderColor: "gray",
    color: "#552600",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
