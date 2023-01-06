import { IconHome } from "@tabler/icons";
import "../styles/components/Menubar.css";
import { useState } from "react";
import {
  Box,
  Collapse,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import MenubarItem from "./MenubarItem";
import { MenuItems } from "../assets/data/MenuData";
import { Key } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const [opened, setOpened] = useState(false);

  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.grey900[1] : theme.colors.white[4],
        color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
        borderRight: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="menubar_wrapper"
    >
      <div onClick={() => setOpened((o) => !o)} className="menubar_top">
        <div className="menubar_topLabel">
          <IconHome />
          <p>Dashboards</p>
        </div>
        <span>02</span>
      </div>

      <Collapse in={opened}>
        <div className="menuItem_sub">
          <Link
            to="/dashboard/analytics"
            className={`menuItem_subLabel ${
              pathname === "/dashboard/analytics" &&
              "submenubar__content__titleActive"
            }`}
            style={{
              color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
            }}
          >
            Ecommerce
          </Link>
          <Link
            to="/dashboard/analytics"
            className={`menuItem_subLabel ${
              pathname === "/dashboard/analytics" &&
              "submenubar__content__titleActive"
            }`}
            style={{
              color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
            }}
          >
            Analytics
          </Link>
        </div>
      </Collapse>

      <div className="menubar__main">
        <Box
          sx={{
            backgroundColor: dark
              ? theme.colors.grey100[8]
              : theme.colors.grey100[7],
          }}
          className="menubar_mainDivider"
        />
        <div className="menubar_mainTitle">APPS</div>
        {MenuItems.map((item: any, index: Key | null | undefined) => (
          <MenubarItem key={index} item={item} />
        ))}
      </div>
    </Box>
  );
}
