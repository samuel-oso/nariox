import StatsWidget from "../components/StatsWidget";
import { IconDotsVertical } from "@tabler/icons";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";

const NewUsers = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

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
        <h5>new users</h5>
        <IconDotsVertical size={15} />
      </div>

      <div
        style={{
          borderBottom: dark
            ? " 1px solid var(--mantine-color-dark-2)"
            : "1px solid var(--mantine-color-grey300-4)",
          paddingTop: "12px",
          paddingBottom: "24px",
        }}
      >
        <StatsWidget
          title="New users this week"
          stats="13,000"
          trend={{
            textClass: "text-success",
            value: "+9.22%",
          }}
          colors={["var(--mantine-color-success-3)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div
        style={{
          borderBottom: dark
            ? " 1px solid var(--mantine-color-dark-2)"
            : "1px solid var(--mantine-color-grey300-4)",
          paddingTop: "12px",
          paddingBottom: "24px",
        }}
      >
        <StatsWidget
          title="New users this month"
          stats="42,176"
          trend={{
            textClass: "text-error",
            value: "-12.80%",
          }}
          type="line"
          colors={["var(--mantine-color-error-3)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div
        style={{
          borderBottom: dark
            ? " 1px solid var(--mantine-color-dark-2)"
            : "1px solid var(--mantine-color-grey300-4)",
          paddingTop: "12px",
          paddingBottom: "24px",
        }}
      >
        <StatsWidget
          title="New users this year"
          stats="333,171"
          trend={{
            textClass: "text-success",
            value: "+92.27%",
          }}
          colors={["var(--mantine-color-success-3)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
      <div
        style={{
          paddingTop: "12px",
          paddingBottom: "24px",
        }}
      >
        <StatsWidget
          title="Returning users"
          stats="63,825"
          trend={{
            textClass: "text-error",
            value: "-61.17%",
          }}
          type="line"
          colors={["var(--mantine-color-error-3)"]}
          data={[10, 20, 67, 42, 39, 20, 24, 12, 36, 9, 33]}
        />
      </div>
    </Box>
  );
};

export default NewUsers;
