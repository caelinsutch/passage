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

const layerStyles = {
  card: {
    background: "rgba(255, 255, 255, 0.4)",
    boxShadow: "0px 4px 64px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(100px)",
    borderRadius: 8,
  },
};

const theme = extendTheme({
  fonts: {
    heading: "Syne, sans-serif",
  },
  layerStyles,
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
