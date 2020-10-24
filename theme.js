import { extendTheme } from "@chakra-ui/core"

const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      500: "#25d366",
      600: "#14c255"
    },
    dark: "#075e54",
    "semi-dark": "#128c7e"
  }
})

export default customTheme;