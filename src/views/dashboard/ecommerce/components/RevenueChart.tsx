import { useState } from "react";
import "../../../../styles/pages/Ecommerce.css";
import {
  Box,
  Collapse,
  Divider,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IconDotsVertical } from "@tabler/icons";

const RevenueChart = () => {
  const [revenue, setRevenue] = useState(false);

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  function getDaysInMonth(month: any, year: any) {
    var date = new Date(year, month, 1);
    var days = [];
    var idx = 0;
    while (date.getMonth() === month && idx < 15) {
      var d = new Date(date);
      days.push(
        d.getDate() + " " + d.toLocaleString("en-us", { month: "short" })
      );
      date.setDate(date.getDate() + 1);
      idx += 1;
    }
    return days;
  }

  const now = new Date();
  const labels = getDaysInMonth(now.getMonth(), now.getFullYear());

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 329,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: dark ? "var(--mantine-color-gray-7)" : "none",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    series: [
      {
        name: "Revenue",
        data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
      },
    ],
    legend: {
      show: false,
    },
    colors: ["var(--mantine-color-success-3)"],
    xaxis: {
      type: "category",
      categories: labels,
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: true,
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
        formatter: (val: number) => {
          return val + "k";
        },
        style: {
          colors: "var(--mantine-color-grey300-6)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [45, 80],
      },
      pattern: {
        style: "circles",
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Revenue",
      data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35],
    },
  ];

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
        <h5>revenue</h5>
        <IconDotsVertical size={15} onClick={() => setRevenue((o) => !o)} />
      </div>
      <Chart
        options={apexBarChartOpts}
        series={apexBarChartData}
        type="area"
        className="revenueCharts"
        height={329}
        dir="ltr"
      />

      <Collapse
        sx={{
          backgroundColor: dark ? theme.colors.white[1] : theme.colors.white[4],
          color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
        }}
        className="cards_collapse"
        in={revenue}
      >
        <div className="cards_collapse_list">
          <p>Today</p>
          <p>7 Days</p>
          <p>15 Days</p>
          <Divider
            style={{
              borderTopColor: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "",
            }}
            my="sm"
          />
          <p>1 Month</p>
          <p>6 Months</p>
          <Divider
            style={{
              borderTopColor: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "",
            }}
            my="sm"
          />
          <p> 1 Year</p>
        </div>
      </Collapse>
    </Box>
  );
};

export default RevenueChart;
