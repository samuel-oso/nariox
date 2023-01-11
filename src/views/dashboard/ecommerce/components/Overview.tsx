import { useState } from "react";
import {
  IconDotsVertical,
  IconArrowNarrowRight,
  IconRefreshDot,
  IconUserPlus,
  IconLogout,
} from "@tabler/icons";
import {
  Box,
  Collapse,
  Divider,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import "../../../../styles/pages/Ecommerce.css";
import { OverviewData } from "../../../../assets/data/OverviewData";

const Overview = () => {
  const [overview, setOverview] = useState(false);

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
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
        }}
        className="cards_header"
      >
        <h5>overview</h5>
        <IconDotsVertical size={15} onClick={() => setOverview((o) => !o)} />
      </div>

      {OverviewData.map((item, idx) => {
        return (
          <div
            style={{
              color: dark ? theme.colors.grey100[6] : theme.colors.secondary[4],
              borderBottom: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "1px solid var(--mantine-color-grey400-1)",
            }}
            key={idx}
            className="overview_list"
          >
            <div>
              <h3
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : theme.colors.grey800[4],
                }}
              >
                {item.h3}
              </h3>
              <p>{item.p}</p>
            </div>
            <div>{item.icon}</div>
          </div>
        );
      })}

      <div
        style={{
          borderTop: dark
            ? "1px solid var(--mantine-color-grey100-8)"
            : "1px solid var(--mantine-color-grey400-1)",
        }}
        className="overview_expand"
      >
        <p>View All</p>
        <IconArrowNarrowRight size={14} />
      </div>

      <Collapse
        sx={{
          backgroundColor: dark ? theme.colors.white[1] : theme.colors.white[4],
          color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
        }}
        in={overview}
        className="cards_collapse"
      >
        <div className="cards_collapse_item">
          <IconRefreshDot size={15} />
          <p>Refresh</p>
        </div>
        <div className="cards_collapse_item">
          <IconUserPlus size={15} />
          <p>Add New</p>
        </div>
        <Divider
          style={{
            borderTopColor: dark
              ? "1px solid var(--mantine-color-grey100-8)"
              : "",
          }}
          my="sm"
        />
        <div
          style={{ color: "var(--mantine-color-red-7)" }}
          className="cards_collapse_item"
        >
          <IconLogout size={15} />
          <p>Exit</p>
        </div>
      </Collapse>
    </Box>
  );
};

export default Overview;
