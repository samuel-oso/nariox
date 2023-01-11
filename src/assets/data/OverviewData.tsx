import { ReactComponent as IconUsers } from "../images/IconUsers.svg";
import { ReactComponent as IconPhoto } from "../images/IconPhoto.svg";
import { ReactComponent as IconShoppingBag } from "../images/IconShoppingBag.svg";

export interface OverviewDataTypes {
  icons?: string;
  h3: string;
  p: string;
  icon?: any;
}

const OverviewData: OverviewDataTypes[] = [
  {
    h3: "871,345",
    p: "Total Visitors",
    icon: <IconUsers />,
  },
  {
    h3: "8,705",
    p: "Total Product Views",
    icon: <IconPhoto />,
  },
  {
    h3: "$99.8",
    p: "Revenue Per Visitor",
    icon: <IconShoppingBag />,
  },
];

export { OverviewData };
