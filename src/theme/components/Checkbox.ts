import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: "Mulish", // change the font family of the label
  },
  control: {
    padding: 1.5, // change the padding of the control
    borderRadius: 0, // change the border radius of the control
    fontSize: "2px",
  },
});

const circular = definePartsStyle({
  control: defineStyle({
    rounded: "full",
    borderColor: "#FF8C1A",
    _checked: {
      bg: "#FF8C1A",
      color: "#fff",
    },
  }),
});

const square = definePartsStyle({
  control: defineStyle({
    _checked: {
      bg: "rgba(0, 164, 122, 1)",
      color: "",
    },
  }),
});
export const checkboxTheme = defineMultiStyleConfig({
  baseStyle,

  variants: { circular, square },
  defaultProps: {
    colorScheme: "#FF8C1A",
  },
});
