import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "../../../../styles/pages/Analytics.css";
import { IconDotsVertical, IconSquareRounded } from "@tabler/icons";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";

const SessionbyBrowser = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 356,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: -30,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: [
      "var(--mantine-color-primary-4)",
      "var(--mantine-color-success-4)",
      "var(--mantine-color-error-4)",
      "var(--mantine-color-warning-4)",
    ],
    labels: ["Firefox", "Chrome", "Opera Mini", "Safari"],
    legend: {
      show: false,
      floating: true,
      fontSize: "13px",
      position: "left",
      offsetX: 10,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        horizontal: 1,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const apexBarChartData = [76, 67, 61, 90];

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
        <h5>session by browser</h5>
        <IconDotsVertical size={15} />
      </div>

      <div style={{ margin: "12px 0" }} dir="ltr">
        <Chart
          options={apexBarChartOpts}
          series={apexBarChartData}
          type="radialBar"
          className="apex-charts"
          height={356}
          dir="ltr"
        />
      </div>

      <div
        style={{
          color: dark ? theme.colors.grey100[6] : theme.colors.grey600[4],
        }}
      >
        <div className="sessionBrowser_wrapper">
          <div className="sessionBrowser_card">
            <IconSquareRounded className="text-primary" />
            <p>Firefox</p>
          </div>
          <p>32.8%</p>
        </div>
        <div className="sessionBrowser_wrapper">
          <div className="sessionBrowser_card">
            <IconSquareRounded className="text-success" />
            <p>Chrome</p>
          </div>
          <p>16.5%</p>
        </div>
        <div className="sessionBrowser_wrapper">
          <div className="sessionBrowser_card">
            <IconSquareRounded className="text-error" />
            <p>Opera Mini</p>
          </div>
          <p>38.3%</p>
        </div>
        <div style={{ marginBottom: "0px" }} className="sessionBrowser_wrapper">
          <div className="sessionBrowser_card">
            <IconSquareRounded className="text-warning" />
            <p>Safari</p>
          </div>
          <p>12.4%</p>
        </div>
      </div>
    </Box>
  );
};

export default SessionbyBrowser;
