import { IconHome } from "@tabler/icons";
import "../../styles/components/Menubar.css";
import { useState } from "react";
import {
  Box,
  Collapse,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import MenubarItem from "./MenubarItem";
import { MenuItems } from "../../assets/data/MenuData";
import { Key } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Exit } from "../../assets/images/logOut.svg";
import { SignOutUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const { pathname } = useLocation();

  const [opened, setOpened] = useState(
    pathname === "/dashboard/ecommerce" || pathname === "/dashboard/analytics"
  );

  const handleCollapseToggle = () => {
    setOpened((prevOpened) => !prevOpened);
  };

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Sign out the user using the Firebase SignOutUser function
      await SignOutUser();
      // After successful sign-out, redirect the user to the root route (/)
      navigate("/");
    } catch (error: any) {
      console.log("Sign Out Failed", error.message);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.grey900[1] : theme.colors.white[4],
        color: dark ? theme.colors.grey900[7] : theme.colors.grey700[4],
        borderRight: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="menubar_wrapper"
    >
      <div onClick={handleCollapseToggle} className="menubar_top">
        <div
          style={{
            color:
              pathname === "/dashboard/ecommerce" ||
              pathname === "/dashboard/analytics"
                ? theme.colors.primary[5]
                : dark
                ? theme.colors.grey900[7]
                : theme.colors.grey700[4],
          }}
          className="menubar_topLabel"
        >
          <IconHome />
          <p>Dashboards</p>
        </div>
        <span>02</span>
      </div>

      <Collapse className="test" in={opened}>
        <div className="menuItem_sub">
          <Link
            to="/dashboard/ecommerce"
            className="menuItem_subLabel"
            style={{
              color:
                pathname === "/dashboard/ecommerce"
                  ? theme.colors.primary[5]
                  : dark
                  ? theme.colors.grey900[7]
                  : theme.colors.grey700[4],
            }}
          >
            Ecommerce
          </Link>
          <Link
            to="/dashboard/analytics"
            className="menuItem_subLabel"
            style={{
              color:
                pathname === "/dashboard/analytics"
                  ? theme.colors.primary[5]
                  : dark
                  ? theme.colors.grey900[7]
                  : theme.colors.grey700[4],
            }}
          >
            Analytics
          </Link>
        </div>
      </Collapse>

      <div className="menubar__main">
        <div className="menubar_mainCategory">
          <Box
            sx={{
              backgroundColor: dark
                ? theme.colors.grey100[8]
                : theme.colors.grey100[7],
            }}
            className="menubar_mainDivider"
          />
          <div className="menubar_mainTitle">APPS</div>
        </div>

        {MenuItems.map((item: any, index: Key | null | undefined) => (
          <MenubarItem key={index} item={item} />
        ))}

        <UnstyledButton className="signOut" onClick={handleSignOut}>
          <Exit />
          <p>Sign Out</p>
        </UnstyledButton>
      </div>
    </Box>
  );
}
