import { activity, ProjectTypes } from "../../../../assets/data/ProjectData";
import {
  Box,
  Grid,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  IconApps,
  IconSquareCheck,
  IconUsers,
  IconClockHour4,
} from "@tabler/icons";

import avatar1 from "../../../../assets/images/avatar-9.jpg";
import avatar2 from "../../../../assets/images/avatar-10.jpg";
import avatar3 from "../../../../assets/images/avatar-2.jpg";
import avatar4 from "../../../../assets/images/avatar-3.jpg";
import Layout from "../../../../utils/Layout";

const ProjectDetail = () => {
  const project: ProjectTypes = {
    id: 3,
    title: "Landing page Design",
    state: "Completed",
    technology: "Web Design",
    shortDesc:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    endDate: "21 Nov, 2020",
    totalTasks: 42,
    totalComments: 65,
    teamMembers: [
      {
        image: avatar1,
        name: "Mat Helme",
      },
      {
        image: avatar2,
        name: "Michael Zenaty",
      },
      {
        image: avatar3,
        name: "James Anderson",
      },
      {
        image: avatar4,
        name: "Mat Helme",
      },
    ],
    progress: 100,
    startDate: "15 July, 2019",
    totalBudget: "$13,250",
    owner: "Rick Perry",
  };

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Layout>
      <Box
        style={{
          backgroundColor: dark ? theme.colors.dark[0] : theme.colors.white[2],
        }}
        className="container"
      >
        <div className="page_titlebox">
          <h4
            style={{
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
            className="page_title"
          >
            Project: {project.title}
          </h4>
        </div>

        <div
          style={{
            backgroundColor: dark ? theme.colors.secondary[1] : "white",
            border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
          }}
          className="projectDetail_overview"
        >
          <h6
            style={{
              borderBottom: dark
                ? "1px solid var(--mantine-color-grey100-8)"
                : "1px solid var(--mantine-color-grey100-7)",
              color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
            }}
          >
            Project Overview
          </h6>

          <Grid
            style={{
              color: dark ? theme.colors.grey100[6] : theme.colors.secondary[4],
            }}
            className="projectDetail_overviewGrid"
          >
            <Grid.Col md={6} lg={3}>
              <IconApps size={50} />
              <p
                style={{
                  color: dark
                    ? theme.colors.grey200[6]
                    : theme.colors.grey800[4],
                }}
              >
                210 <span>Total Tasks</span>
              </p>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <IconSquareCheck size={50} />
              <p
                style={{
                  color: dark
                    ? theme.colors.grey200[6]
                    : theme.colors.grey800[4],
                }}
              >
                99 <span>Total Tasks Completed</span>
              </p>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <IconUsers size={50} />
              <p
                style={{
                  color: dark
                    ? theme.colors.grey200[6]
                    : theme.colors.grey800[4],
                }}
              >
                9 <span>Total Team Size</span>
              </p>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <IconClockHour4 size={50} />
              <p
                style={{
                  color: dark
                    ? theme.colors.grey200[6]
                    : theme.colors.grey800[4],
                }}
              >
                3456 <span>Total Hours Spent</span>
              </p>
            </Grid.Col>
          </Grid>
        </div>
      </Box>
    </Layout>
  );
};

export default ProjectDetail;
