import {
  Box,
  Button,
  Checkbox,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import "../../../../styles/pages/Ecommerce.css";
import { TaskList } from "../../../../assets/data/TasksData";

const Tasks = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

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
        <h5>tasks</h5>
        <Button style={{ fontSize: ".7875rem", fontWeight: "400" }}>
          View All
        </Button>
      </div>

      <div className="task_checkbox">
        {TaskList.map((props, idx) => {
          return (
            <Checkbox
              key={idx}
              label={
                <div>
                  <h5
                    style={{
                      color: dark
                        ? theme.colors.grey200[6]
                        : theme.colors.grey700[4],
                    }}
                  >
                    {props.h5}
                  </h5>
                  <p
                    style={{
                      color: dark
                        ? theme.colors.grey100[6]
                        : theme.colors.grey600[4],
                    }}
                  >
                    {props.p}
                  </p>
                </div>
              }
            />
          );
        })}
      </div>
    </Box>
  );
};

export default Tasks;
