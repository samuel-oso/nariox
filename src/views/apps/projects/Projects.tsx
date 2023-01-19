import {
  Box,
  Chip,
  Progress,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
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

  return (
    <Box>
      <div className="projectList_title">
        <Chip defaultChecked variant="filled" radius="sm" bg={variant}>
          {project.state}
        </Chip>
        <p>{project.technology}</p>
      </div>

      <h5>{project.title}</h5>
      <p>{project.shortDesc}</p>

      <div>
        {(modifiedTeamMembers || []).map((member, index) => {
          return (
            <Link key={index} to="#">
              {member.image && (
                <img src={member.image} className="" alt="member img" />
              )}
              {member.variant && (
                <div className="">
                  <span
                    className={classNames(
                      "avatar-title",
                      "rounded-circle",
                      "bg-soft-" + member.variant,
                      "text-" + member.variant
                    )}
                  >
                    {member.name[0]}
                  </span>
                </div>
              )}
            </Link>
          );
        })}
        {project.teamMembers.length > modifiedTeamMembers.length && (
          <div>
            <div className="">
              <span className="avatar-title rounded-circle bg-soft-warning text-warning">
                {project.teamMembers.length - displayCount}+
              </span>
            </div>
          </div>
        )}
      </div>

      <div>
        <div>
          <ul>
            <li>
              <Tooltip label="Due date">
                <div>
                  <i>
                    <IconCalendar />
                  </i>
                  {project.endDate}
                </div>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Tasks">
                <div>
                  <i>
                    <IconMenu2 />
                  </i>
                  {project.totalTasks}
                </div>
              </Tooltip>
            </li>
            <li>
              <Tooltip label="Comments">
                <div>
                  <i>
                    <IconMessages />
                  </i>
                  {project.totalComments}
                </div>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div>
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
              <div key={"proj-" + project.id}>
                <SingleProject project={project} />
              </div>
            );
          })}
        </div>
      </Box>
    </Layout>
  );
};

export default Projects;
