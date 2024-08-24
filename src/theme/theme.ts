import { Button, MantineColorsTuple, createTheme } from "@mantine/core";

import buttonClasses from "./Button.module.scss";

const green: MantineColorsTuple = [
  "#E4F5EA", // light buttons
  "rgba(7,91,0,0.16)", // background
  "#d5feea",
  "#a6fdd1",
  "#74fdb7",
  "#40fd94",
  "#37fe8b",
  "#2ce279",
  "#20c86a",
  "#007039", // main
];

const theme = createTheme({
  fontFamily: "Inika, serif",
  headings: {
    fontFamily: "Rouge Script, cursive",
    fontWeight: "400",
  },
  primaryColor: "green",
  primaryShade: 9,
  colors: {
    green,
  },
  components: {
    Button: Button.extend({
      classNames: {
        label: buttonClasses.label,
      },
    }),
  },
});

export default theme;
