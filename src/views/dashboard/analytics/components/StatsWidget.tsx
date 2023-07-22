import Chart from "react-apexcharts";
import classNames from "classnames";
import { ApexOptions } from "apexcharts";
import { useMantineColorScheme, useMantineTheme } from "@mantine/core";

interface StatisticsChartWidgetProps {
  colors?: Array<string>;
  containerClass?: string;
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";
  name?: string;
  data?: Array<number>;
  title?: string;
  stats?: string;
  trend: {
    textClass: string;
    value: string;
  };
}

const StatsWidget = (props: StatisticsChartWidgetProps) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  //  default options
  const options: ApexOptions = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    stroke: {
      width: props.type ? 2 : 0,
      curve: "smooth",
    },
    colors: props.colors || ["#008FFB"],
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
          formatter: (seriesName) => {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  // chart data
  const series = [{ name: props.name || "Data", data: props.data || [] }];

  return (
    <div className="statsWidget">
      <div>
        <h5
          style={{
            color: dark
              ? theme.colors.grey100[6]
              : "var(--mantine-color-gray-6)",
            fontWeight: "500",
          }}
        >
          {props.title}
        </h5>
        <h3
          style={{
            color: dark
              ? theme.colors.grey300[0]
              : "var(--mantine-color-gray-8)",
          }}
        >
          {props.stats}
        </h3>
        <h6 className={classNames("", props.trend.textClass)}>
          {props.trend.value}
        </h6>
      </div>
      <div>
        <Chart
          options={options}
          series={series}
          type="bar"
          height={60}
          width={110}
        />
      </div>
    </div>
  );
};

export default StatsWidget;
