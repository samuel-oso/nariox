import logo from "../images/logo.png";
import logoWeb from "../images/logoWeb.png";
import logoWeb_Dark from "../images/logoWeb_Dark.png";
import user from "../images/user.png";
import "../styles/components/Navbar.css";
import {
  Avatar,
  Box,
  Input,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconMenu2,
  IconChevronDown,
  IconSearch,
  IconDeviceLaptop,
  IconApps,
  IconWorld,
  IconBell,
} from "@tabler/icons";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.grey100[8] : theme.colors.white[4],
        color: dark ? theme.colors.white[4] : theme.colors.grey800[4],
        borderBottom: dark
          ? "none"
          : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="navWrapper"
    >
      <div className="navList_start">
        <Box
          sx={{
            borderRight: dark
              ? "none"
              : "1px solid var(--mantine-color-grey300-4)",
          }}
          className="navList_logos"
        >
          <img className="logo_sm" src={logo} alt="logo" />
          <img
            className="logo_lg"
            src={`${dark ? logoWeb_Dark : logoWeb}`}
            alt="logo-web"
          />
        </Box>

        <IconMenu2 />

        <div className="navList_new">
          <p>Create New</p>
          <IconChevronDown size={16} />
        </div>
      </div>
      <div className="navList_end">
        <div className="navList_search">
          <IconSearch className="navList_searchSm" />
          <Input
            className="navList_searchWeb"
            placeholder="Search..."
            rightSection={<IconSearch size={16} />}
          />
        </div>
        <div className="navList_icons">
          <IconDeviceLaptop />
          <IconApps />
          <IconWorld />
        </div>
        <div className="navList_notification">
          <IconBell />
          <p>6</p>
        </div>
        <div className="navList_profile">
          <Avatar src={user} radius="xl" />
          <div className="navList_profileName">
            <p>Samuel Oso</p>
            <IconChevronDown />
          </div>
        </div>
        <ThemeToggle />
      </div>
    </Box>
  );
}

export default Navbar;
