import Layout from "../../../../utils/Layout";
import "../../../../styles/pages/Analytics.css";
import {
  Box,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import AnalyticsOverview from "../components/AnalyticsOverview";
import NewUsers from "../components/NewUsers";

function Analytics() {
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
        <div style={{ gap: "0px" }} className="page_titlebox">
          <h4
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
            className="page_title"
          >
            Analytics
          </h4>
          <div className="ecommerce_title_right"></div>
        </div>

        <Grid>
          <Grid.Col lg={8}>
            <AnalyticsOverview />
          </Grid.Col>
          <Grid.Col lg={4}>
            <NewUsers />
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Analytics;
