import "../../../../styles/components/AnalyticsOverview.css";
import { IconDotsVertical } from "@tabler/icons";
import {
  Tabs,
  useMantineColorScheme,
  useMantineTheme,
  Box,
} from "@mantine/core";
import SubscribersChart from "./SubscribersChart";
import TotalViewsChart from "./TotalViewsChart";
import BounceRateChart from "./BounceRateChart";

import {} from "@mantine/core";

const AnalyticsOverview = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        position: "relative",
        minHeight: "100%",
        padding: "20px",
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          padding: "0px",
          marginBottom: "7px",
        }}
        className="cards_header"
      >
        <h5>overviews</h5>
        <IconDotsVertical size={15} />
      </div>

      <Tabs className="analytics-Tab" defaultValue="views">
        <Tabs.List
          style={{
            borderBottom: dark
              ? "2px solid var(--mantine-color-dark-2)"
              : " 2px solid var(--mantine-color-grey300-5)",
          }}
        >
          <Tabs.Tab value="subscribers">
            <div className="analyticsTab_label">
              <p
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : theme.colors.secondary[4],
                }}
              >
                Subscribers
              </p>
              <h1
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : theme.colors.grey800[4],
                }}
              >
                456
              </h1>
            </div>
          </Tabs.Tab>
          <Tabs.Tab value="views">
            <div className="analyticsTab_label">
              <p
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : theme.colors.secondary[4],
                }}
              >
                Total views
              </p>
              <h1
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : theme.colors.grey800[4],
                }}
              >
                3,981
              </h1>
            </div>
          </Tabs.Tab>
          <Tabs.Tab value="rate">
            <div className="analyticsTab_label">
              <p
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : theme.colors.secondary[4],
                }}
              >
                Bounce rate
              </p>
              <h1
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : theme.colors.grey800[4],
                }}
              >
                85%
              </h1>
            </div>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="subscribers" pt="xs">
          <SubscribersChart />
        </Tabs.Panel>

        <Tabs.Panel value="views" pt="xs">
          <TotalViewsChart />
        </Tabs.Panel>

        <Tabs.Panel value="rate" pt="xs">
          <BounceRateChart />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default AnalyticsOverview;
