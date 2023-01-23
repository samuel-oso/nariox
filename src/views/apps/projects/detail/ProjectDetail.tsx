import { ProjectTypes } from "../../../../assets/data/ProjectData";
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
  IconCalendar,
  IconCalendarOff,
  IconCurrencyDollar,
  IconUser,
} from "@tabler/icons";

import avatar1 from "../../../../assets/images/avatar-9.jpg";
import avatar2 from "../../../../assets/images/avatar-10.jpg";
import avatar3 from "../../../../assets/images/avatar-2.jpg";
import avatar4 from "../../../../assets/images/avatar-3.jpg";
import Layout from "../../../../utils/Layout";
import { Link } from "react-router-dom";

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

        <Grid className="projectDetail_content">
          <Grid.Col
            style={{
              backgroundColor: dark ? theme.colors.secondary[1] : "white",
              border: dark
                ? "none"
                : "1px solid var(--mantine-color-grey300-4)",
              marginTop: "20px",
            }}
            md={12}
          >
            <h6
              style={{
                color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
              }}
            >
              About Project
            </h6>

            <div className="projectDetail_text">
              <p>
                To an English person, it will seem like simplified English, as a
                skeptical Cambridge friend of mine told me what Occidental is.
                The European languages are members of the same family. Their
                separate existence is a myth.
              </p>
              <p>
                Everyone realizes why a new common language would be desirable:
                one could refuse to pay expensive translators. To achieve this,
                it would be necessary to have uniform grammar, pronunciation and
                more common words. If several languages coalesce, the grammar of
                the resulting language is more simple and regular than that of
                the individual languages.
              </p>
              <ul>
                <li>Quis autem vel eum iure</li>
                <li>Ut enim ad minima veniam</li>
                <li>Et harum quidem rerum</li>
                <li>Nam libero cum soluta</li>
              </ul>
            </div>

            <div className="projectDetail_tags">
              <h6>Tags</h6>
              <div>
                <Link to="#">Html</Link>
                <Link to="#">Css</Link>
                <Link to="#">Bootstrap</Link>
                <Link to="#">JQuery</Link>
              </div>
            </div>

            <Grid className="projectDetail_dates">
              <Grid.Col md={6} lg={3}>
                <p>
                  <IconCalendar size={18} />
                  Start Date
                </p>
                <h5>{project.startDate}</h5>
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <p>
                  <IconCalendarOff size={18} /> Due Date
                </p>
                <h5>{project.endDate}</h5>
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <p>
                  <IconCurrencyDollar size={18} /> Budget
                </p>
                <h5>{project.totalBudget}</h5>
              </Grid.Col>
              <Grid.Col md={6} lg={3}>
                <p>
                  <IconUser size={18} /> Owner
                </p>
                <h5>{project.owner}</h5>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProjectDetail;
