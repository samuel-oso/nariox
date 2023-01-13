import { IconDotsVertical } from "@tabler/icons";
import { Box, useMantineColorScheme, useMantineTheme } from "@mantine/core";

const SessionbyLocations = () => {
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
        height: "523px",
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
        <h5>session by locations</h5>
        <IconDotsVertical size={15} />
      </div>

      <iframe
        width="100%"
        height="90%"
        title="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        style={{ border: "0px" }}
      ></iframe>
    </Box>
  );
};

export default SessionbyLocations;
