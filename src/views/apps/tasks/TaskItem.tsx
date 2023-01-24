import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

// dummy data
import { TaskTypes } from "../../../assets/data/KanbanData";

interface TaskItemProps {
  task: TaskTypes;
}

// task item
const TaskItem = (props: TaskItemProps) => {
  const task = props.task || {};

  return (
    <div className="task-list-items">
      <Card className="border mb-0">
        <Card.Body className="p-3">
          <h6 className="mt-0 mb-2 fs-15">
            <Link to="#" className="text-body">
              {task.title}
            </Link>
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

          <p className="mb-0 mt-4">
            <img
              src={task.userAvatar}
              alt=""
              className="avatar-xs rounded-circle me-2"
            />

            <span className="text-nowrap align-middle fs-13 me-2">
              <i className="uil uil-comments-alt text-muted me-1"></i>
              {task.totalComments}
            </span>

            <span className="text-nowrap align-middle fs-13">
              <i className="uil uil-check-square me-1 text-muted"></i>
              {task.subTaskCompleted}/{task.totalSubTasks}
            </span>
            <small className="float-end text-muted">{task.dueDate}</small>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TaskItem;
