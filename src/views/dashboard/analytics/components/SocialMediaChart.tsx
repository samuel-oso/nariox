import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import {
  Box,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons";

const SocialMediaChart = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 410,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: dark
            ? "var(--mantine-color-grey500-5)"
            : "var(--mantine-color-gray-5)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    xaxis: {
      categories: [
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
      ],
      labels: {
        style: {
          colors: dark
            ? "var(--mantine-color-grey500-5)"
            : "var(--mantine-color-gray-5)",
          fontSize: "11px",
          fontFamily: "IBM Plex Sans, sans-serif",
          fontWeight: 700,
        },
      },
    },
    legend: {
      position: "bottom",
      offsetX: 0,
      offsetY: 0,
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "var(--gray)",
      padding: {
        bottom: 5,
      },
    },
  };

  const apexBarChartData = [
    {
      name: "Facebook",
      data: [40, 80, 20, 50, 40, 20, 20, 60, 10, 40],
    },
    {
      name: "Instagram",
      data: [0, 0, 0, 15, 0, 0, 5, 10, 0, 0],
    },
    {
      name: "Twitter",
      data: [10, 10, 5, 60, 50, 100, 80, 70, 20, 110],
    },
  ];

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
        <h5>social media traffic</h5>
        <IconDotsVertical size={15} />
      </div>

      <Grid gutter="xl">
        <Grid.Col md={8}>
          <Chart
            options={apexBarChartOpts}
            series={apexBarChartData}
            type="bar"
            className="apex-charts"
            height={410}
            dir="ltr"
          />
        </Grid.Col>
        <Grid.Col md={3} className="socialCard-Content">
          <div>
            <div
              style={{
                borderBottom: dark
                  ? " 1px solid var(--mantine-color-dark-2)"
                  : "1px solid var(--mantine-color-grey300-4)",
                margin: "12px 0 12px 0",
                padding: "12px 0 12px 0",
              }}
            >
              <h6
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : "var(--mantine-color-gray-6)",
                }}
              >
                Twitter
              </h6>
              <h3
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : "var(--mantine-color-gray-8)",
                }}
              >
                650k
              </h3>
            </div>
          </div>
          <div>
            <div
              style={{
                borderBottom: dark
                  ? " 1px solid var(--mantine-color-dark-2)"
                  : "1px solid var(--mantine-color-grey300-4)",
                margin: "12px 0 12px 0",
                padding: "12px 0 12px 0",
              }}
            >
              <h6
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : "var(--mantine-color-gray-6)",
                }}
              >
                Instagram
              </h6>
              <h3
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : "var(--mantine-color-gray-8)",
                }}
              >
                230k
              </h3>
            </div>
          </div>
          <div>
            <div
              style={{
                borderBottom: dark
                  ? " 1px solid var(--mantine-color-dark-2)"
                  : "1px solid var(--mantine-color-grey300-4)",
                margin: "12px 0 12px 0",
                padding: "12px 0 12px 0",
              }}
            >
              <h6
                style={{
                  color: dark
                    ? theme.colors.grey100[6]
                    : "var(--mantine-color-gray-6)",
                }}
              >
                Facebook
              </h6>
              <h3
                style={{
                  color: dark
                    ? theme.colors.grey300[0]
                    : "var(--mantine-color-gray-8)",
                }}
              >
                982k
              </h3>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default SocialMediaChart;
