import { ColorMode } from "@chakra-ui/color-mode";

type ThemeProps = {
  colorMode: ColorMode;
};

export const Button = {
  baseStyle: {
    fontFamily: "'Outfit', sans-serif;",
    fontWeight: "500",
    borderRadius: "base",
  },
  variants: {
    actionbtn: () => ({
      bg: "rgba(235, 235, 235, 0.29)",
      color: "white",
      mr: 2,
      mb: 4,
      px: 4,
      py: 6,
      _hover: {
        bg: "rgba(235, 235, 235, 0.29)",
      },
      _active: {
        bg: "rgba(235, 235, 235, 0.29)",
      },
    }),
    solid: () => ({
      bg: "primary",
      color: "white",
      fontSize: "md",
      _hover: {
        bg: "brand.hover",
      },
      _active: {
        bg: "primary",
      },
      px: "44px",
      py: "14px",
    }),
    outline: () => ({
      bg: "transparent",
      color: "white",
      fontSize: "md",
      _hover: {
        bg: "transparent",
        color: "#1F1F1F",
        borderColor: "#E1E1E1",
      },
      _active: {
        bg: "transparent",
        borderColor: "#C27123",
        color: "#C27123",
      },

      px: "44px",
      py: "14px",
      borderColor: "primary",
    }),
    link: ({ colorMode }: ThemeProps) => ({
      color: colorMode === "dark" ? "grey.200" : "gray.600",
      _hover: { textDecoration: "none" },
    }),
  },
};
