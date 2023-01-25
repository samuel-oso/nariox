import classNames from "classnames";
import "../../../styles/components/Tasks.css";
import { TaskTypes } from "../../../assets/data/KanbanData";
import { Card } from "@mantine/core";
import { IconDotsVertical, IconMessage, IconSquareCheck } from "@tabler/icons";

interface TaskItemProps {
  task: TaskTypes;
}

// task item
const TaskItem = (props: TaskItemProps) => {
  const task = props.task || {};

  return (
    <div className="taskList_items">
      <Card>
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
