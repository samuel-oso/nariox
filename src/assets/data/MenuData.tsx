import { ReactComponent as Dashboard } from "../images/Dashboard.svg";

export interface MenuItemTypes {
  key: string;
  label: string;
  icon?: any;
  url?: string;
  children?: MenuItemTypes[];
}

const MenuItems: MenuItemTypes[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <Dashboard />,
    url: "/dashboard/analytics",
  },
  {
    key: "user-accounts",
    label: "User Accounts",
    icon: <Dashboard />,
    children: [
      {
        key: "user-kyc",
        label: "KYC Submissions",
        url: "/dashboard/analytics",
      },
      {
        key: "user-customers",
        label: "Customers",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: <Dashboard />,
    children: [
      {
        key: "transaction-declined",
        label: "Declined",
        url: "/dashboard/analytics",
      },
      {
        key: "transaction-flagged",
        label: "Flagged",
        url: "/dashboard/analytics",
      },
    ],
  },
  {
    key: "menu",
    label: "Menu",
    icon: <Dashboard />,
    url: "/dashboard/analytics",
  },
  {
    key: "logout",
    label: "Log out",
    icon: <Dashboard />,
  },
];

export { MenuItems };
