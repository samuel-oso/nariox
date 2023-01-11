import "../../../../styles/pages/Ecommerce.css";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { TopPerformersData } from "../../../../assets/data/TopPerformersData";

const TopPerformers = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
        padding: "20px",
      }}
    >
      <div
        style={{
          color: dark ? theme.colors.grey300[0] : theme.colors.grey800[4],
          padding: "0px",
          marginBottom: "24px",
        }}
        className="cards_header"
      >
        <h5>top performers</h5>
      </div>

      {TopPerformersData.map((props, idx) => {
        return (
          <div
            style={{
              borderTop: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "1px solid var(--mantine-color-grey400-1)",
              color: dark ? theme.colors.grey100[6] : theme.colors.secondary[4],
            }}
            key={idx}
            className="performerItem"
          >
            <div className="performerItem_profile">
              <img src={props.img} alt="profile" />
              <div className="performerItem_Label">
                <h5
                  style={{
                    color: dark
                      ? theme.colors.grey300[0]
                      : theme.colors.grey800[4],
                  }}
                >
                  {props.h5}
                </h5>
                <p>{props.p}</p>
              </div>
            </div>
            <div>{props.icon}</div>
          </div>
        );
      })}
    </Box>
  );
};

export default TopPerformers;
