export interface ViewsDetailTypes {
  page: string;
  bounce_rate: string;
}
const viewsDetails: ViewsDetailTypes[] = [
  {
    page: "/dashboard",
    bounce_rate: "30.51%",
  },
  {
    page: "/analytics",
    bounce_rate: "72.98%",
  },
  {
    page: "/calender",
    bounce_rate: "39.51%",
  },
  {
    page: "/chat",
    bounce_rate: "27.32%",
  },
  {
    page: "/email",
    bounce_rate: "09.12%",
  },
  {
    page: "/projects/list",
    bounce_rate: "63.81%",
  },
  {
    page: "/projects/details",
    bounce_rate: "89.11%",
  },
  {
    page: "/tasks/list",
    bounce_rate: "48.42%",
  },
];

export { viewsDetails };
