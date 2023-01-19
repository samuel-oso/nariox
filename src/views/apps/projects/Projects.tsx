import {
  Box,
  Badge,
  Progress,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
  Grid,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { projects, ProjectTypes } from "../../../assets/data/ProjectData";
import Layout from "../../../utils/Layout";
import classNames from "classnames";
import "../../../styles/pages/Projects.css";
import { IconCalendar, IconMenu2, IconMessages } from "@tabler/icons";

const SingleProject = (props: { project: ProjectTypes }) => {
  const project = props.project || {};
  const variant = project.state === "Completed" ? "success" : "warning";
  const displayCount = 3;

  let modifiedTeamMembers;

  if (
    project.teamMembers.length <= displayCount ||
    project.teamMembers.length - displayCount === 1
  ) {
    modifiedTeamMembers = project.teamMembers;
  } else {
    modifiedTeamMembers = project.teamMembers.filter(
      (m, index) => index < displayCount
    );
  }

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        backgroundColor: dark ? theme.colors.secondary[1] : "white",
        border: dark ? "none" : "1px solid var(--mantine-color-grey300-4)",
      }}
      className="projectList_card"
    >
      <div style={{ padding: "20px" }}>
        <div className="projectList_title">
          <p className={classNames("text-" + variant)}>{project.technology}</p>

          <Badge bg={variant} radius="sm">
            {project.state}
          </Badge>
        </div>

        <h5>{project.title}</h5>
        <p className="projectList_desc">{project.shortDesc}</p>

        <div className="projectList_img">
          {(modifiedTeamMembers || []).map((member, index) => {
            return (
              <Link key={index} to="#">
                {member.image && (
                  <img src={member.image} className="" alt="member img" />
                )}
              </Link>
            );
          })}
          {project.teamMembers.length > modifiedTeamMembers.length && (
            <div className="projectList_imgNo">
              <span className="bg-soft-warning text-warning">
                {project.teamMembers.length - displayCount}+
              </span>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          borderTop: dark
            ? "1px solid var(--mantine-color-grey100-8)"
            : "1px solid var(--mantine-color-grey300-4)",
          padding: "20px",
        }}
      >
        <div className="projectList_icons">
          <ul>
            <li>
              <Tooltip label="Due date">
                <p>
                  <span>
                    <IconCalendar size={18} />
                  </span>
                  {project.endDate}
                </p>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Tasks">
                <p>
                  <span>
                    <IconMenu2 size={18} />
                  </span>
                  {project.totalTasks}
                </p>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Comments">
                <p>
                  <span>
                    <IconMessages size={18} />
                  </span>
                  {project.totalComments}
                </p>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="projectList_progress">
          <Tooltip label={project.progress + "% completed"}>
            <Progress
              value={project.progress}
              color={variant}
              style={{ height: "5px" }}
            />
          </Tooltip>
        </div>
      </div>
    </Box>
  );
};

const Projects = () => {
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
            Project List
          </h4>
        </div>

        <div>
          {(projects || []).map((project, i) => {
            return (
              <>
                <Grid key={"proj-" + project.id}>
                  <Grid.Col md={6} lg={4}>
                    <SingleProject project={project} />
                  </Grid.Col>
                  <Grid.Col md={6} lg={4}>
                    <SingleProject project={project} />
                  </Grid.Col>
                  <Grid.Col md={6} lg={4}>
                    <SingleProject project={project} />
                  </Grid.Col>
                </Grid>
                <div></div>
              </>
            );
          })}
        </div>
      </Box>
    </Layout>
  );
};

export default Projects;
