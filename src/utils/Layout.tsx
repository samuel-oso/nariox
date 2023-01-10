import { AppShell } from "@mantine/core";
import Menubar from "../components/navigation/Menubar";
import Navbar from "../components/navigation/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <AppShell
      className="Appshell"
      padding="xl"
      navbar={<Menubar />}
      header={<Navbar />}
    >
      {props.children}
    </AppShell>
  );
}

export default Layout;
