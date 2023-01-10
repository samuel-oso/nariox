import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import App from "../App";

function Theme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const dark = colorScheme === "dark";

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: "light",
          colors: {
            primary: [
              "#dde1fe",
              "#bac3fc",
              "#98a5fb",
              "#7587f9",
              "#5369f8",
              "#4254c6",
              "#5369f8",
              "#212a63",
              "#111532",
            ],
            secondary: [
              "#e2e3e5",
              "#36404a",
              "#a7acb1",
              "#899197",
              "#6c757d",
              "#565e64",
              "#41464b",
              "#2b2f32",
              "#161719",
            ],
            success: [
              "#d9f6ec",
              "#b4edd8",
              "#8ee5c5",
              "#69dcb1",
              "#43d39e",
              "#36a97e",
              "#287f5f",
              "#1b543f",
              "#0d2a20",
            ],
            info: [
              "#d3f3f9",
              "#a8e7f4",
              "#7cdaee",
              "#51cee9",
              "#25c2e3",
              "#1e9bb6",
              "#167488",
              "#0f4e5b",
              "#07272d",
            ],
            warning: [
              "#fff2ce",
              "#ffe59d",
              "#ffd86d",
              "#ffcb3c",
              "#ffbe0b",
              "#cc9809",
              "#997207",
              "#664c04",
              "#332602",
            ],
            error: [
              "#ffdee3",
              "#ffbec8",
              "#ff9dac",
              "#ff7d91",
              "#ff5c75",
              "#cc4a5e",
              "#993746",
              "#66252f",
              "#331217",
            ],
            grey100: [
              "#fefefe",
              "#fcfdfd",
              "#fbfbfc",
              "#f9fafb",
              "#f8f9fa",
              "#c6c7c8",
              "#8c98a5",
              "#d4d6dd",
              "#424e5a",
            ],
            grey200: [
              "#fdfdfd",
              "#fbfbfc",
              "#fafafa",
              "#f8f8f9",
              "#f6f6f7",
              "#c5c5c6",
              "#94a0ad",
              "#626263",
              "#313131",
            ],
            grey300: [
              "#acbfd2",
              "#f3f5f9",
              "#eef1f7",
              "#e8ecf4",
              "#e2e7f1",
              "#b5b9c1",
              "#888b91",
              "#5a5c60",
              "#2d2e30",
            ],
            grey400: [
              "#f5f6f8",
              "#ebeef0",
              "#e2e5e9",
              "#d8dde1",
              "#ced4da",
              "#a5aaae",
              "#adb5bd",
              "#525557",
              "#292a2c",
            ],
            grey500: [
              "#eff0f2",
              "#dee1e5",
              "#ced3d7",
              "#bdc4ca",
              "#adb5bd",
              "#8a9197",
              "#686d71",
              "#45484c",
              "#232426",
            ],
            grey600: [
              "#e2e3e5",
              "#c4c8cb",
              "#a7acb1",
              "#899197",
              "#6c757d",
              "#565e64",
              "#41464b",
              "#2b2f32",
              "#161719",
            ],
            grey700: [
              "#dbdbde",
              "#b7b7bd",
              "#93939c",
              "#6f6f7b",
              "#4b4b5a",
              "#3c3c48",
              "#2d2d36",
              "#1e1e24",
              "#0f0f12",
            ],
            grey800: [
              "#d6d8d9",
              "#aeb0b3",
              "#85898c",
              "#5d6166",
              "#343a40",
              "#2a2e33",
              "#1f2326",
              "#15171a",
              "#0a0c0d",
            ],
            grey900: [
              "#d3d3d4",
              "#37424c",
              "#7a7c7f",
              "#4d5154",
              "#212529",
              "#1a1e21",
              "#141619",
              "#9097a7",
              "#3c4752",
            ],
            dark: [
              "#303841",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
            white: [
              "#ffffff12",
              "#3b454f",
              "#f3f4f7",
              "#ffffff",
              "#ffffff",
              "#cccccc",
              "#7a7d84",
              "#666666",
              "#333333",
            ],
          },
          primaryColor: "primary",
          fontFamily: "IBM Plex Sans, sans-serif",
          components: {
            Input: {
              styles: (theme) => ({
                input: {
                  backgroundColor: dark
                    ? theme.colors.white[1]
                    : theme.colors.grey200[4],
                  color: dark ? theme.colors.white[6] : theme.colors.grey400[6],
                  border: dark
                    ? "none"
                    : "1px solid var(--mantine-color-grey300-4)",
                },
              }),
            },
          },
          breakpoints: {
            md: 768,
            lg: 1280,
          },
        }}
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
      >
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Theme;
