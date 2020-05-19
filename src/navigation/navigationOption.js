import { Platform, StatusBar } from "react-native";

const navigationOptionCommon = {
  headerStyle: {
    height: 100,
  },
  headerBarStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
};

export { navigationOptionCommon };
