import { IconHome } from "@tabler/icons";
import "../styles/components/Menubar.css";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";

// import MenubarItem from "./MenubarItem";
// import { MenuItems } from "../assets/data/MenuData";
// import { Key } from "react";

export default function Sidebar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.grey900[1] : theme.colors.white[4],
        color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
        borderRight: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="menubar_wrapper"
    >
      <div className="menubar_top">
        <div className="menubar_topLabel">
          <IconHome />
          <p>Dashboards</p>
        </div>
        <span>02</span>
      </div>
      <div className="menubar__main">
        {/* {MenuItems.map((item: any, index: Key | null | undefined) => (
          <MenubarItem key={index} item={item} />
        ))} */}
      </div>
    </Box>
  );
}
