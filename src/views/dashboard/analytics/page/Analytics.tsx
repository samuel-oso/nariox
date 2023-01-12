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
import SocialMediaChart from "../components/SocialMediaChart";
import Sources from "../components/socialmedia_cards/Sources";
import { sources } from "../../../../assets/data/SourcesTypes";
import EngagementOverview from "../components/socialmedia_cards/EngagementOverview";
import { engagementOverviews } from "../../../../assets/data/EngagementTypes";
import Platforms from "../components/socialmedia_cards/Platforms";
import { platforms } from "../../../../assets/data/PlatformsData";
import Channels from "../components/socialmedia_cards/Channels";
import { channels } from "../../../../assets/data/ChannelData";

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

        <Grid>
          <Grid.Col lg={6}>
            <SocialMediaChart />
          </Grid.Col>
          <Grid.Col lg={6}>
            <Grid>
              <Grid.Col md={6}>
                <Sources sources={sources} />
              </Grid.Col>
              <Grid.Col md={6}>
                <EngagementOverview engagementOverviews={engagementOverviews} />
              </Grid.Col>
              <Grid.Col md={6}>
                <Platforms platforms={platforms} />
              </Grid.Col>
              <Grid.Col md={6}>
                <Channels channels={channels} />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Analytics;
