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
import TopPerformers from "../components/TopPerformers";
import Tasks from "../components/Tasks";
import LineChart from "../components/LineChart";
import { lineChartWithData } from "../../../../assets/data/ApexLinearChartData";
import SalesChart from "../components/SalesChart";
import RecentOrdersTable from "../components/RecentOrdersTable";
import { OrderDetails } from "../../../../assets/data/OrderdetailsData";

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
            Ecommerce
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

        <Grid sx={{ marginBottom: "8px" }}>
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

        <Grid>
          <Grid.Col lg={6}>
            <SalesChart />
          </Grid.Col>
          <Grid.Col lg={6}>
            <RecentOrdersTable orderDetails={OrderDetails} />
          </Grid.Col>
        </Grid>

        <Grid sx={{ marginBottom: "8px" }}>
          <Grid.Col lg={4}>
            <TopPerformers />
          </Grid.Col>
          <Grid.Col lg={4}>
            <Tasks />
          </Grid.Col>
          <Grid.Col lg={4}>
            <LineChart lineChartWithData={lineChartWithData} />
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Ecommerce;
