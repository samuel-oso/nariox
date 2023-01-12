export interface EngagementOverviewsTypes {
  duration: string;
  sessions: string;
  views: string;
}
const engagementOverviews: EngagementOverviewsTypes[] = [
  {
    duration: "0-30",
    sessions: "2,250",
    views: "4,250",
  },
  {
    duration: "31-60",
    sessions: "1,501",
    views: "2,050",
  },
  {
    duration: "61-120",
    sessions: "750",
    views: "1,600",
  },
];

export { engagementOverviews };
