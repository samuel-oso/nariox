import { useState } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Collapse,
  Divider,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconDotsVertical,
  IconRefreshDot,
  IconUserPlus,
  IconLogout,
} from "@tabler/icons";
import { ApexOptions } from "apexcharts";
import "../../../../styles/pages/Ecommerce.css";

const SalesChart = () => {
  const [sales, setSales] = useState(false);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const apexBarChartOpts: ApexOptions = {
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "11px",
              fontFamily: "IBM Plex Sans, sans-serif",
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
          },
        },
        expandOnClick: false,
      },
    },
    chart: {
      height: 291,
      type: "donut",
    },
    legend: {
      show: true,
      fontSize: "11px",
      fontFamily: "IBM Plex Sans, sans-serif",
      fontWeight: 700,
      position: "right",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 6,
        vertical: 3,
      },
      labels: {
        colors: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
        useSeriesColors: false,
      },
    },
    labels: ["Clothes 44k", "Smartphons 55k", "Electronics 41k", "Other 17k"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    tooltip: {
      y: {
        formatter: (value: number) => {
          return value + "k";
        },
      },
    },
  };

  const apexBarChartData = [44, 55, 41, 17];

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        padding: "20px",
        minHeight: "100%",
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          alignItems: "flex-start",
          padding: "0px",
          marginBottom: "24px",
        }}
        className="cards_header"
      >
        <h5>sales by category</h5>
        <IconDotsVertical size={15} onClick={() => setSales((o) => !o)} />
      </div>

      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="donut"
        className="apex-charts mb-0 mt-4"
        height={291}
        dir="ltr"
      />

      <Collapse
        sx={{
          backgroundColor: dark ? theme.colors.white[1] : theme.colors.white[4],
          color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
        }}
        in={sales}
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

export default SalesChart;
