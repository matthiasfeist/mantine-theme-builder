import { Card, createTheme, Paper, rem } from "@mantine/core";

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontSizes: {
    xs: rem("12px"),
    sm: rem("14px"),
    md: rem("16px"),
    lg: rem("18px"),
    xl: rem("20px"),
    xl2: rem("24px"),
    xl3: rem("30px"),
    xl4: rem("36px"),
    xl5: rem("48px"),
  },
  components: {
    /** Put your mantine component override here */
    Paper: Paper.extend({
      defaultProps: {
        p: "md",
        shadow: "lg",
        radius: "md",
        
      },
    }),

    Card: Card.extend({
      defaultProps: {
        p: "md",
        shadow: "lg",
        radius: "md",
      },
    }),
  },
});
