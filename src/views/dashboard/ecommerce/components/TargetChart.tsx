import { useState } from "react";
import Chart from "react-apexcharts";
import {
  Box,
  Collapse,
  Divider,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { ApexOptions } from "apexcharts";
import "../../../../styles/pages/Ecommerce.css";
import {
  IconDotsVertical,
  IconRefreshDot,
  IconUserPlus,
  IconLogout,
} from "@tabler/icons";

const TargetChart = () => {
  const [target, setTarget] = useState(false);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 349,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: "var(--mantine-color-grey300-6)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "var(--mantine-color-grey300-6)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: dark ? "var(--mantine-color-gray-7)" : "none",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        formatter: function (val) {
          return "$ " + val;
        },
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Net Profit",
      data: [35, 44, 55, 57, 56, 61],
    },
    {
      name: "Revenue",
      data: [52, 76, 85, 101, 98, 87],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        position: "relative",
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
        }}
        className="cards_header"
      >
        <h5>targets</h5>
        <IconDotsVertical size={15} onClick={() => setTarget((o) => !o)} />
      </div>
      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="bar"
        className="targetCharts"
        height={349}
        dir="ltr"
      />

      <Collapse
        sx={{
          backgroundColor: dark ? theme.colors.white[1] : theme.colors.white[4],
          color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
        }}
        in={target}
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

export default TargetChart;
