import React from "react";
import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from "@chakra-ui/react";
import icons from "./Assets";

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  size?: number | string;
} & ChakraIconProps;

const Icon: React.FC<IconProps> = ({ name, size, ...props }) => {
  const SVG = icons[name];

  return <ChakraIcon as={SVG} width={size} height={size} {...props} />;
};

export default Icon;
