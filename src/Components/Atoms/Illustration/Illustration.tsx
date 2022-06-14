import React from "react";
import {
  Image as ChakraImage,
  ImageProps as ChakraImageProps,
} from "@chakra-ui/react";
import illustrations from "./Assets";

export type IllustrationName = keyof typeof illustrations;

export type IllustrationProps = {
  name: IllustrationName;
  size?: number | string;
} & ChakraImageProps;

const Illustration: React.FC<IllustrationProps> = ({
  name,
  size,
  ...props
}) => {
  const SVG = illustrations[name];

  return <ChakraImage as={SVG} width={size} height={size} {...props} />;
};

export default Illustration;
