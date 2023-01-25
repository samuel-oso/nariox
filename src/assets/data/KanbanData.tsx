// images
import avatar2 from "../images/avatar-2.jpg";
import avatar3 from "../images/avatar-3.jpg";
import avatar4 from "../images/avatar-4.jpg";
import avatar5 from "../images/avatar-5.jpg";
import avatar6 from "../images/avatar-6.jpg";
import avatar7 from "../images/avatar-7.jpg";
import avatar8 from "../images/avatar-8.jpg";

export interface TaskTypes {
  id: number;
  title: string;
  status: string;
  priority: string;
  userAvatar: string;
  totalComments: number;
  totalSubTasks: number;
  subTaskCompleted: number;
  dueDate: string;
}

const tasks: TaskTypes[] = [
  {
    id: 1,
    title: "Finish up portfolio",
    status: "Pending",
    priority: "High",
    userAvatar: avatar5,
    totalComments: 28,
    totalSubTasks: 10,
    subTaskCompleted: 1,
    dueDate: "Jul 18, 2019",
  },
  {
    id: 2,
    title: "Redesign website",
    status: "Inprogress",
    priority: "Low",
    userAvatar: avatar6,
    totalComments: 21,
    totalSubTasks: 7,
    subTaskCompleted: 4,
    dueDate: "Jul 20, 2019",
  },
  {
    id: 3,
    title: "Sign up for Hackathon",
    status: "Review",
    priority: "Low",
    userAvatar: avatar2,
    totalComments: 24,
    totalSubTasks: 2,
    subTaskCompleted: 1,
    dueDate: "Jul 21, 2019",
  },
  {
    id: 4,
    title: "Run Javascript server",
    status: "Done",
    priority: "High",
    userAvatar: avatar7,
    totalComments: 21,
    totalSubTasks: 5,
    subTaskCompleted: 5,
    dueDate: "Jul 22, 2019",
  },
  {
    id: 5,
    title: "Check repo for commits",
    status: "Pending",
    priority: "Low",
    userAvatar: avatar3,
    totalComments: 2,
    totalSubTasks: 5,
    subTaskCompleted: 2,
    dueDate: "Jul 18, 2019",
  },
  {
    id: 6,
    title: "Merge all pending pull requests",
    status: "Pending",
    priority: "Medium",
    userAvatar: avatar4,
    totalComments: 24,
    totalSubTasks: 8,
    subTaskCompleted: 2,
    dueDate: "Jul 21, 2019",
  },
  {
    id: 7,
    title: "Sync with the product designer",
    status: "Review",
    priority: "Medium",
    userAvatar: avatar7,
    totalComments: 11,
    totalSubTasks: 6,
    subTaskCompleted: 4,
    dueDate: "Jul 10, 2019",
  },
  {
    id: 8,
    title: "Dashboard Implementation",
    status: "Inprogress",
    priority: "High",
    userAvatar: avatar8,
    totalComments: 10,
    totalSubTasks: 4,
    subTaskCompleted: 3,
    dueDate: "Jul 24, 2019",
  },
];

export { tasks };
