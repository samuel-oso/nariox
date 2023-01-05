import {
  Group,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <>
      <Group position="center">
        <Switch
          size="md"
          color={dark ? "gray" : "dark"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          onLabel={
            <IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />
          }
          offLabel={
            <IconMoonStars
              size={16}
              stroke={2.5}
              color={theme.colors.blue[6]}
            />
          }
        />
      </Group>
    </>
  );
}

export default ThemeToggle;
