import classNames from "classnames";
import "../../../styles/components/Tasks.css";
import { TaskTypes } from "../../../assets/data/KanbanData";
import { Card, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconDotsVertical, IconMessage, IconSquareCheck } from "@tabler/icons";

interface TaskItemProps {
  task: TaskTypes;
}

// task item
const TaskItem = (props: TaskItemProps) => {
  const task = props.task || {};

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <div className="taskList_items">
      <Card
        style={{
          backgroundColor: dark
            ? theme.colors.grey900[1]
            : theme.colors.white[4],
          border: dark
            ? "1px solid var(--mantine-color-grey500-6)"
            : "1px solid var(--mantine-color-grey300-4)",
          color: dark ? theme.colors.grey200[6] : theme.colors.grey800[4],
        }}
      >
        <h6>
          {task.title}
          <span>
            <IconDotsVertical size={15} />
          </span>
        </h6>

        <span
          className={classNames("badge", {
            "badge-soft-danger": task.priority === "High",
            "badge-soft-warning": task.priority === "Medium",
            "badge-soft-success": task.priority === "Low",
          })}
        >
          {task.priority}
        </span>

        <div className="taskList_content">
          <img src={task.userAvatar} alt="user avatar" />

          <span>
            <IconMessage size={17} />
            {task.totalComments}
          </span>

          <span>
            <IconSquareCheck size={17} />
            {task.subTaskCompleted}/{task.totalSubTasks}
          </span>

          <small>{task.dueDate}</small>
        </div>
      </Card>
    </div>
  );
};

export default TaskItem;
