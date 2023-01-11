import profile1 from "../images/profile1.jpg";
import profile2 from "../images/profile2.webp";
import profile3 from "../images/profile3.webp";
import profile4 from "../images/profile4.webp";
import profile5 from "../images/profile5.webp";
import { IconDotsVertical } from "@tabler/icons";

export interface TopPerformersDataTypes {
  img: any;
  h5: string;
  p: string;
  icon?: any;
}

const TopPerformersData: TopPerformersDataTypes[] = [
  {
    img: profile1,
    h5: "Don Mikel",
    p: "Product Manager",
    icon: <IconDotsVertical />,
  },
  {
    img: profile2,
    h5: "Abraham Brood",
    p: "Sales Rep",
    icon: <IconDotsVertical />,
  },
  {
    img: profile3,
    h5: "Samuel Oyedele",
    p: "Marketing Lead",
    icon: <IconDotsVertical />,
  },
  {
    img: profile4,
    h5: "Dami Uche",
    p: "Human Resources",
    icon: <IconDotsVertical />,
  },
  {
    img: profile5,
    h5: "Mohammed Ismail",
    p: "Managing Director",
    icon: <IconDotsVertical />,
  },
];

export { TopPerformersData };
