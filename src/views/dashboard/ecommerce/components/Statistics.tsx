import { Grid, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import StatisticsChartWidget from "./StatisticsChartWidget";
import { IconArrowNarrowUp, IconArrowNarrowDown } from "@tabler/icons";

const Statistics = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Grid className="statsGrid">
      <Grid.Col md={6} lg={3} className="statsGridCol">
        <StatisticsChartWidget
          title="Today Revenue"
          stats="$150"
          trend={{
            textClass: "text-success",
            icon: IconArrowNarrowUp,
            value: "6.01%",
          }}
          colors={["var(--mantine-color-primary-4)"]}
        />
      </Grid.Col>
      <Grid.Col md={6} lg={3} className="statsGridCol">
        <StatisticsChartWidget
          title="Product Sold"
          stats="9801"
          trend={{
            textClass: "text-error",
            icon: IconArrowNarrowDown,
            value: "35.16%",
          }}
          colors={["var(--mantine-color-orange-5)"]}
        />
      </Grid.Col>
      <Grid.Col md={6} lg={3} className="statsGridCol">
        <StatisticsChartWidget
          title="New Customers"
          stats="102"
          trend={{
            textClass: "text-success",
            icon: IconArrowNarrowUp,
            value: "3.12%",
          }}
          colors={["var(--mantine-color-green-4)"]}
        />
      </Grid.Col>
      <Grid.Col md={6} lg={3} className="statsGridCol">
        <StatisticsChartWidget
          title="New Visitors"
          stats="1259"
          trend={{
            textClass: "text-error",
            icon: IconArrowNarrowDown,
            value: "18.95%",
          }}
          colors={["var(--mantine-color-yellow-5)"]}
        />
      </Grid.Col>
    </Grid>
  );
};

export default Statistics;
