import { useState } from "react";
import { Key } from "react";
import { IconHome } from "@tabler/icons";
import "../../styles/components/Drawer.css";

import {
  Drawer as MantineDrawer,
  Box,
  Collapse,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { MenuItems } from "../../assets/data/MenuData";
import DrawerItem from "./DrawerItem";

type DrawerProps = {
  opened: boolean;
  setOpened: (value: boolean) => void;
};

function Drawer(props: DrawerProps) {
  const { opened = false, setOpened } = props;

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const [openedDash, setOpenedDash] = useState(false);

  const { pathname } = useLocation();

  return (
    <Box>
      <MantineDrawer
        className="drawer"
        opened={opened}
        onClose={() => setOpened(false)}
        size="md"
        withCloseButton={false}
      >
        <Box
          sx={{
            backgroundColor: dark
              ? theme.colors.grey900[1]
              : theme.colors.white[4],
            color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
            borderRight: dark
              ? "none"
              : "1px solid var(--mantine-color-grey300-4)",
          }}
          className="drawer_wrapper"
        >
          <div onClick={() => setOpenedDash((o) => !o)} className="drawer_top">
            <div className="drawer_topLabel">
              <IconHome />
              <p>Dashboards</p>
            </div>
            <span>02</span>
          </div>

          <Collapse className="test" in={openedDash}>
            <div className="drawerItem_sub">
              <Link
                to="/"
                className={`drawerItem_subLabel ${
                  pathname === "/" && "subdrawer__content__titleActive"
                }`}
                style={{
                  color: dark
                    ? theme.colors.grey900[7]
                    : theme.colors.grey700[4],
                }}
              >
                Ecommerce
              </Link>
              <Link
                to="/dashboard/analytics"
                className={`drawerItem_subLabel ${
                  pathname === "/dashboard/analytics" &&
                  "subdrawer__content__titleActive"
                }`}
                style={{
                  color: dark
                    ? theme.colors.grey900[7]
                    : theme.colors.grey700[4],
                }}
              >
                Analytics
              </Link>
            </div>
          </Collapse>

          <div className="drawer__main">
            <div className="drawer_mainCategory">
              <Box
                sx={{
                  backgroundColor: dark
                    ? theme.colors.grey100[8]
                    : theme.colors.grey100[7],
                }}
                className="drawer_mainDivider"
              />
              <div className="drawer_mainTitle">APPS</div>
            </div>

            {MenuItems.map((item: any, index: Key | null | undefined) => (
              <DrawerItem key={index} item={item} />
            ))}
          </div>
        </Box>
      </MantineDrawer>
    </Box>
  );
}

export default Drawer;
