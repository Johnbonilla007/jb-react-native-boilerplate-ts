import { Dimensions, StatusBar, StyleSheet } from "react-native";
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  scrollView: {
    height: windowHeight - 115, // This will subtract 10px from the full height of the screen
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
