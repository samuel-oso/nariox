import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useMantineColorScheme } from "@mantine/core";

const getDayWiseTimeSeries = (baseval: any, count: any, yrange: any) => {
  let lDate = 0;
  let dt: Array<any> = [];
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    dt.push({
      x: x,
      y: y,
    });

    lDate = baseval;
    baseval += 86400000;
    i++;
  }

  return { dt, lDate };
};

const BounceRateChart = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const { dt, lDate } = getDayWiseTimeSeries(
    new Date("11 Feb 2021 GMT").getTime(),
    10,
    {
      min: 10,
      max: 90,
    }
  );

  const [data, setData] = useState<Array<any>>(dt);
  const [lastDate, setLastDate] = useState<number>(lDate);

  useEffect(() => {
    const interval = setInterval(() => {
      const yRange: any = {
        min: 10,
        max: 90,
      };
      var newDate: any = lastDate + 86400000;
      setLastDate(newDate);
      let array: Array<any> = [...data];
      array.push({
        x: newDate,
        y:
          Math.floor(Math.random() * (yRange.max - yRange.min + 1)) +
          yRange.min,
      });
      setData(array);
    }, 2000);
    return () => {
      window.clearInterval(interval);
    };
  }, [data, lastDate]);

  const apexBarChartOpts: ApexOptions = {
    chart: {
      height: 371,
      type: "line",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 2000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [3],
    },
    colors: ["var(--mantine-color-orange-5)"],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: 777600000,
      labels: {
        style: {
          colors: dark
            ? "var(--mantine-color-grey500-5)"
            : "var(--mantine-color-gray-5)",
        },
      },
    },
    yaxis: {
      max: 100,
      labels: {
        style: {
          colors: dark
            ? "var(--mantine-color-grey500-5)"
            : "var(--mantine-color-gray-5)",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: dark
        ? "var(--mantine-color-grey500-5)"
        : "var(--mantine-color-gray-5)",
    },
  };

  const apexBarChartData = [
    {
      name: "Bounce rate",
      data: data,
    },
  ];

  return (
    <Chart
      options={apexBarChartOpts}
      series={apexBarChartData}
      type="line"
      className="apex-charts"
      height={371}
      dir="ltr"
    />
  );
};

export default BounceRateChart;
