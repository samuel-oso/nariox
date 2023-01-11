import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import classNames from "classnames";
import "../../../../styles/pages/Ecommerce.css";

interface StatisticsChartWidgetProps {
  title?: string;
  stats?: string;
  trend: {
    textClass: string;
    icon: any;
    value: string;
  };
  colors?: Array<string>;
}

const StatisticsChartWidget = ({
  title,
  stats,
  trend,
  colors,
}: StatisticsChartWidgetProps) => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    colors: colors,
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName: any) => {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.2,
        inverseColors: false,
        opacityFrom: 0.2,
        opacityTo: 0,
        stops: [45, 100],
      },
    },
  };

  // chart data
  const series = [
    {
      data: [10, 25, 5, 30, 10, 45, 15, 60, 20, 80, 40],
    },
  ];

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      className="stats_wrapper"
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
    >
      <div className="stats_title">
        <Box
          sx={{
            color: dark ? theme.colors.grey100[6] : theme.colors.secondary[4],
          }}
          className="stats_title_label"
        >
          {title}
        </Box>
        <Box
          sx={{
            color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          }}
          className="stats_title_value"
        >
          {stats}
        </Box>
      </div>

      <div className="stats_chart">
        <Chart
          options={options}
          series={series}
          type="area"
          height={45}
          width={80}
        />
        <span className={classNames("stats_chart_span", trend.textClass)}>
          <trend.icon size={12} /> {trend.value}
        </span>
      </div>
    </Box>
  );
};

export default StatisticsChartWidget;
