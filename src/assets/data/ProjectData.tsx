// images
import avatar1 from "../images/avatar-1.jpg";
import avatar2 from "../images/avatar-2.jpg";
import avatar3 from "../images/avatar-3.jpg";
import avatar5 from "../images/avatar-5.jpg";
import avatar6 from "../images/avatar-6.jpg";
import avatar8 from "../images/avatar-8.jpg";
import avatar9 from "../images/avatar-9.jpg";
import avatar10 from "../images/avatar-10.jpg";

export interface ProjectTypes {
  id: number;
  title: string;
  technology: string;
  state: string;
  shortDesc?: string;
  totalTasks?: number;
  totalTasksCompleted?: number;
  totalTeamSize?: number;
  totalHoursSpent?: number;
  totalComments?: number;
  teamMembers: {
    image?: string;
    name: string;
    variant?: string;
  }[];
  progress?: number;
  startDate?: string;
  endDate?: string;
  totalBudget?: string;
  owner?: string;
}

export interface ActivityTypes {
  date: string;
  variant: string;
  title: string;
  description: string;
}

const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "New Admin Design",
    state: "Completed",
    technology: "Web Design",
    shortDesc:
      "With supporting text below as a natural lead-in to additional contenposuere erat a ante",
    startDate: "15 Jul",
    endDate: "15 Dec",
    totalTasks: 78,
    totalTasksCompleted: 60,
    totalTeamSize: 12,
    totalHoursSpent: 2500,
    totalComments: 214,
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
        name: "Helme",
        variant: "primary",
      },
      {
        name: "Helme",
        variant: "primary",
      },
    ],
    progress: 100,
    totalBudget: "13250",
    owner: "Rick Perry",
  },
  {
    id: 2,
    title: "App Design and Development",
    state: "Pending",
    technology: "Andriod",
    shortDesc:
      "A handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
    startDate: "15 Aug",
    endDate: "28 Nov",
    totalTasks: 85,
    totalComments: 103,
    teamMembers: [
      {
        image: avatar6,
        name: "Mat Helme",
      },
      {
        image: avatar8,
        name: "Michael Zenaty",
      },
      {
        image: avatar8,
        name: "James Anderson",
      },
    ],
    progress: 80,
    totalTasksCompleted: 70,
    totalTeamSize: 15,
    totalHoursSpent: 200,
    totalBudget: "45050",
    owner: "Nick Perry",
  },
  {
    id: 3,
    title: "Landing page Design",
    state: "Completed",
    technology: "Web Design",
    shortDesc:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    startDate: "15 Jul",
    endDate: "19 Nov",
    totalTasks: 42,
    totalComments: 65,
    teamMembers: [
      {
        name: "Helme",
        variant: "primary",
      },
      {
        image: avatar10,
        name: "Michael Zenaty",
      },
      {
        image: avatar1,
        name: "James Anderson",
      },
      {
        image: avatar3,
        name: "Mat Helme",
      },
      {
        image: avatar5,
        name: "Michael Zenaty",
      },
    ],
    progress: 100,
    totalTasksCompleted: 30,
    totalTeamSize: 12,
    totalHoursSpent: 2500,
    totalBudget: "13250",
    owner: "Rick Perry",
  },
  {
    id: 4,
    title: "Custom Software Development",
    state: "Pending",
    technology: "Andriod",
    shortDesc:
      "You need to be sure there isn't anything embarrassing hidden in the middle of text",
    startDate: "10 Jul",
    endDate: "02 Nov",
    totalTasks: 95,
    totalComments: 83,
    teamMembers: [
      {
        image: avatar5,
        name: "Mat Helme",
      },
      {
        name: "Kai Parker",
        variant: "danger    ",
      },
      {
        image: avatar9,
        name: "James Anderson",
      },
    ],
    progress: 68,
    totalTasksCompleted: 70,
    totalTeamSize: 16,
    totalHoursSpent: 2500,
    totalBudget: "13250",
    owner: "Rick Perry",
  },
  {
    id: 5,
    title: "Brand logo design",
    state: "Completed",
    technology: "Web Design",
    shortDesc:
      "Everyone realizes why a new common language refuse to pay expensive translators.",
    startDate: "15 Jul",
    endDate: "13 Oct",
    totalTasks: 36,
    totalComments: 78,
    teamMembers: [
      {
        name: "Dan Helme",
        variant: "warning",
      },
      {
        image: avatar3,
        name: "Michael Zenaty",
      },
      {
        image: avatar5,
        name: "James Anderson",
      },
      {
        image: avatar1,
        name: "Mat Helme",
      },
    ],
    progress: 100,
    totalTasksCompleted: 20,
    totalTeamSize: 12,
    totalHoursSpent: 2500,
    totalBudget: "13250",
    owner: "Rick Perry",
  },
  {
    id: 6,
    title: "Multipurpose Landing Template",
    state: "Completed",
    technology: "Web Design",
    shortDesc:
      "With supporting text below as a natural lead-in to additional contenposuere erat a ante",
    startDate: "15 Jul",
    endDate: "11 Oct",
    totalTasks: 30,
    totalComments: 148,
    teamMembers: [
      {
        image: avatar6,
        name: "Mat Helme",
      },
      {
        image: avatar8,
        name: "Michael Zenaty",
      },
      {
        image: avatar9,
        name: "James Anderson",
      },
    ],
    progress: 100,
    totalTasksCompleted: 30,
    totalTeamSize: 12,
    totalHoursSpent: 2500,
    totalBudget: "13250",
    owner: "Rick Perry",
  },
];

const activity: ActivityTypes[] = [
  {
    date: "09 Jan",
    variant: "primary",
    title: "Bryan",
    description: "Neque porro quisquam est",
  },
  {
    date: "08 Jan",
    variant: "success",
    title: "Everett",
    description: "Ut enim ad minima veniam quis velit",
  },
  {
    date: "08 Jan",
    variant: "warning",
    title: "Richard",
    description: "Quis autem vel eum iure",
  },
  {
    date: "08 Jan",
    variant: "info",
    title: "Jery",
    description: "Quis autem vel eum iure",
  },
  {
    date: "07 Jan",
    variant: "primary",
    title: "Bryan",
    description: "Neque porro quisquam est",
  },
  {
    date: "06 Jan",
    variant: "success",
    title: "Everett",
    description: "Ut enim ad minima veniam quis velit",
  },
  {
    date: "05 Jan",
    variant: "warning",
    title: "Richard",
    description: "Quis autem vel eum iure",
  },
];

export { projects, activity };
