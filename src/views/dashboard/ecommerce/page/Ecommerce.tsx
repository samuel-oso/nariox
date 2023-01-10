import Layout from "../../../../utils/Layout";
import {
  Box,
  Button,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconNotes, IconChevronDown } from "@tabler/icons";
import DatePicker from "../components/DatePicker";
import "../../../../styles/pages/Ecommerce.css";
import Statistics from "../components/Statistics";

function Ecommerce() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
          height: "100%",
        }}
        className="container"
      >
        <div className="page_titlebox">
          <h4
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
            className="page_title"
          >
            Dashboard
          </h4>
          <div className="ecommerce_title_right">
            <DatePicker />
            <Button
              className="ecommerce_title_rightBtn"
              leftIcon={<IconNotes size={16} />}
              rightIcon={<IconChevronDown size={16} />}
            >
              Download
            </Button>
          </div>
        </div>

        <Box
          sx={{
            padding: "0 20px",
            backgroundColor: dark
              ? theme.colors.dark[0]
              : theme.colors.white[2],
          }}
        >
          <Statistics />
        </Box>
      </Box>
    </Layout>
  );
}

export default Ecommerce;
