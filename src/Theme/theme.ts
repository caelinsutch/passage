import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import components from "./Components";

const colors = {
  primaryFontColor: {
    lightMode: "gray.700",
    darkMode: "gray.200",
  },
  secondaryFontColor: {
    lightMode: "gray.600",
    darkMode: "gray.400",
  },
};

const theme = extendTheme({
  fonts: {
    heading: "Syne, sans-serif",
  },
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        color: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode
        )(props),
      },
    }),
  },
  components,
});

export default theme;
