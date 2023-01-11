import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "../../../../styles/pages/Ecommerce.css";
import { ApexLinearChartData } from "../../../../assets/data/ApexLinearChartData";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";

interface LineChartProps {
  lineChartWithData: ApexLinearChartData;
  showLoader?: boolean;
}

// simple line chart
const LineChart = ({ lineChartWithData }: LineChartProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  // default options
  const apexLineChartWithLables: ApexOptions = {
    chart: {
      height: 380,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      width: [3, 3],
      curve: "smooth",
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: dark ? "var(--mantine-color-gray-7)" : "none",
    },
    markers: {
      size: 6,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
        style: {
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
        },
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
      title: {
        text: "Temperature",
        style: {
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
        },
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  // chart data
  const apexLineChartWithLablesData = [
    {
      name: "High - 2018",
      data: lineChartWithData.data1 || [],
    },
    {
      name: "Low - 2018",
      data: lineChartWithData.data2 || [],
    },
  ];

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
        <h5>line chart</h5>
      </div>

      <Chart
        options={apexLineChartWithLables}
        series={apexLineChartWithLablesData}
        type="line"
        height={380}
        className="apex-charts"
        dir="ltr"
      />
    </Box>
  );
};

export default LineChart;
