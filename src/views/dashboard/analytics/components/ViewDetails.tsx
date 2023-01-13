import { ViewsDetailTypes } from "../../../../assets/data/ViewDetailsData";
import {
  IconUpload,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconDeviceTablet,
} from "@tabler/icons";
import {
  Box,
  Table,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import "../../../../styles/pages/Analytics.css";

interface ViewsDetailsProps {
  viewsDetails: ViewsDetailTypes[];
}

const ViewsDetails = ({ viewsDetails }: ViewsDetailsProps) => {
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
        <h5>view details</h5>
        <IconUpload size={15} />
      </div>

      <div className="viewDetails-Table">
        <Table>
          <thead
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey700[4],
            }}
          >
            <tr>
              <th style={{ width: "50%" }}>Page</th>
              <th style={{ width: "25%" }}>Bounce Rate</th>
              <th style={{ width: "25%" }}>Traffic Type</th>
            </tr>
          </thead>
          <tbody>
            {(viewsDetails || []).map((item, index) => {
              return (
                <tr
                  style={{
                    color: dark
                      ? theme.colors.grey100[6]
                      : theme.colors.grey600[4],
                  }}
                  key={index}
                >
                  <td>
                    <div>{item.page}</div>
                  </td>
                  <td>{item.bounce_rate}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div>
                        <IconDeviceLaptop />
                      </div>
                      <div>
                        <IconDeviceMobile />
                      </div>
                      <div>
                        <IconDeviceTablet />
                      </div>
                    </div>
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

export default ViewsDetails;
