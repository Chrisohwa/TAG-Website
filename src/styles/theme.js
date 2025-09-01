import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
  "3xl": "1636px",
};

const buttonRecipe = defineRecipe({
  fonts: {
    heading: `"Bricolage Grotesque", sans-serif`,
    body: `"Gellix", sans-serif`,
  },
  base: {
    borderRadius: { base: "4px", md: "8px" },
    fontWeight: "700",
    transition: ".3s ease-in-out",
    fontSize: { base: "12px", md: "14px" },
  },
  variants: {
    visual: {
      primary: {
        bg: "#028FF5",
        color: "white",
        fontWeight: "600",
        _hover: { bg: "#028FF5", opacity: 0.5 },
        transition: ".3s ease-in-out",
        _disabled: {
          opacity: 0.3,
        },
      },
      gloss: {
        bg: "#FFFFFF29",
        backdropFilter: "blur(11px)",
        border: "1px solid #FFFFFF36",
        color: "white",
        fontWeight: "600",
        _hover: { bg: "#FFFFFF29", opacity: 0.8 },
        transition: ".3s ease-in-out",
        _disabled: {
          opacity: 0.3,
        },
      },
    },
  },
  defaultVariants: {
    visual: "primary",
  },
});

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: `"Bricolage Grotesque", sans-serif`,
        body: `"Gellix", sans-serif`,
      },
      colors: {
        red: { value: "#EE383A" },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
    breakpoints,
  },
});
