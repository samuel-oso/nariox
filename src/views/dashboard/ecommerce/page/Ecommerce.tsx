import Layout from "../../../../utils/Layout";
import {
  Box,
  Button,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconNotes, IconChevronDown } from "@tabler/icons";
import DatePicker from "../components/DatePicker";
import "../../../../styles/pages/Ecommerce.css";
import Statistics from "../components/Statistics";
import Overview from "../components/Overview";
import RevenueChart from "../components/RevenueChart";
import TargetChart from "../components/TargetChart";

function Ecommerce() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        style={{
          backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
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

        <Box>
          <Statistics />
        </Box>

        <Grid>
          <Grid.Col lg={3}>
            <Overview />
          </Grid.Col>
          <Grid.Col lg={6}>
            <RevenueChart />
          </Grid.Col>
          <Grid.Col lg={3}>
            <TargetChart />
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Ecommerce;
