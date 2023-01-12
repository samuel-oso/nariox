import { PlatformTypes } from "../../../../../assets/data/PlatformsData";
import { IconUpload } from "@tabler/icons";
import { Progress } from "@mantine/core";
import {
  Box,
  Table,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

interface PlatformsProps {
  platforms: PlatformTypes[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
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
        <h5>platforms</h5>
        <IconUpload size={15} />
      </div>

      <div>
        <Table style={{ fontSize: "13px" }} className="mt-4">
          <thead
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
            }}
          >
            <tr>
              <th>System</th>
              <th>Visits</th>
              <th style={{ width: "40%" }}></th>
            </tr>
          </thead>
          <tbody>
            {(platforms || []).map((item, index) => {
              return (
                <tr
                  style={{
                    color: dark
                      ? theme.colors.grey100[6]
                      : theme.colors.grey600[4],
                  }}
                  key={index}
                >
                  <td>{item.system}</td>
                  <td>{item.visits}</td>
                  <td>
                    <Progress value={item.progress} style={{ height: "3px" }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Box>
  );
};

export default Platforms;
