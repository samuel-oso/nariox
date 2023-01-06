import { ReactComponent as IconCalendar } from "../images/IconCalendar.svg";
import { ReactComponent as IconMessage } from "../images/IconMessage.svg";
import { ReactComponent as IconMail } from "../images/IconMail.svg";
import { ReactComponent as IconBriefcase } from "../images/IconBriefcase.svg";
import { ReactComponent as IconClipboard } from "../images/IconClipboard.svg";
import { ReactComponent as IconFilePlus } from "../images/IconFilePlus.svg";

export interface MenuItemTypes {
  key: string;
  label: string;
  icon?: any;
  url?: string;
  children?: MenuItemTypes[];
}

const MenuItems: MenuItemTypes[] = [
  {
    key: "calendar",
    label: "Calendar",
    icon: <IconCalendar />,
    url: "/dashboard/analytics",
  },
  {
    key: "chat",
    label: "Chat",
    icon: <IconMessage />,
    url: "/dashboard/analytics",
  },
  {
    key: "email",
    label: "Email",
    icon: <IconMail />,
    children: [
      {
        key: "inbox",
        label: "Inbox",
        url: "/dashboard/analytics",
      },
      {
        key: "read email",
        label: "Read Email",
        url: "/dashboard/analytics",
      },
      {
        key: "compose email",
        label: "Compose Email",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    key: "projects",
    label: "Projects",
    icon: <IconBriefcase />,
    children: [
      {
        key: "project list",
        label: "List",
        url: "/dashboard/analytics",
      },
      {
        key: "project details",
        label: "Details",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    key: "tasks",
    label: "Tasks",
    icon: <IconClipboard />,
    children: [
      {
        key: "tasks list",
        label: "List",
        url: "/dashboard/analytics",
      },
      {
        key: "tasks details",
        label: "Kanban Board",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    key: "file manager",
    label: "File Manager",
    icon: <IconFilePlus />,
    url: "/dashboard/analytics",
  },
];

export { MenuItems };
