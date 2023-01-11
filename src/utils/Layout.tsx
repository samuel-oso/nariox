import {
  AppShell,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Menubar from "../components/navigation/Menubar";
import Navbar from "../components/navigation/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <AppShell
      className="Appshell"
      padding="xl"
      navbar={<Menubar />}
      header={<Navbar />}
      style={{
        backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
      }}
    >
      {props.children}
    </AppShell>
  );
}

export default Layout;
