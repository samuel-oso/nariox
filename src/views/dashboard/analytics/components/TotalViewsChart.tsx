import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useMantineColorScheme } from "@mantine/core";

const TotalViewsChart = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 371,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: ["gradient", "solid"],
      opacity: [0.35, 1],
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0.2,
        stops: [45, 100],
      },
    },
    labels: [
      "Jan 01",
      "Jan 02",
      "Jan 03",
      "Jan 04",
      "Jan 05",
      "Jan 06",
      "Jan 07",
      "Jan 08",
      "Jan 09 ",
      "Jan 10",
      "Jan 11",
    ],
    legend: {
      show: false,
    },
    colors: ["var(--mantine-color-primary-4)", "var(--mantine-color-error-4)"],
    xaxis: {
      labels: {
        style: {
          colors: dark
            ? "var(--mantine-color-grey500-5)"
            : "var(--mantine-color-gray-5)",
        },
      },
    },
    yaxis: [
      {
        opposite: true,
        labels: {
          show: false,
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
    grid: {
      borderColor: dark
        ? "var(--mantine-color-grey500-5)"
        : "var(--mantine-color-gray-5)",
      padding: {
        bottom: 5,
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const apexBarChartData = [
    {
      name: "New",
      type: "area",
      data: [20, 15, 30, 20, 40, 25, 50, 35, 50, 35, 70],
    },
    {
      name: "Returning",
      type: "line",
      data: [1, 3, 2, 5, 3, 5, 3, 6, 5.3, 8, 7.3],
    },
  ];

  return (
    <Chart
      options={apexBarChartOpts}
      series={apexBarChartData}
      type="area"
      className="apex-charts"
      height={371}
    />
  );
};

export default TotalViewsChart;
