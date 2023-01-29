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
    url: "/apps/calendar",
  },
  {
    key: "chat",
    label: "Chat",
    icon: <IconMessage />,
    url: "/apps/chat",
  },
  {
    key: "email",
    label: "Email",
    icon: <IconMail />,
    children: [
      {
        key: "inbox",
        label: "Inbox",
        url: "/apps/email/inbox",
      },
      {
        key: "read email",
        label: "Read Email",
        url: "/apps/email/details",
      },
      {
        key: "compose email",
        label: "Compose Email",
        url: "/apps/email/compose",
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
        url: "/apps/projects/list",
      },
      {
        key: "project details",
        label: "Details",
        url: "/apps/projects/details",
      },
    ],
  },
  {
    key: "tasks",
    label: "Tasks",
    icon: <IconClipboard />,
    url: "/apps/tasks",
  },
];

export { MenuItems };
