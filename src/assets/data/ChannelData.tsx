export interface ChannelsTypes {
  channel: string;
  visits: string;
  progress: number;
  color?: string;
}
const channels: ChannelsTypes[] = [
  {
    channel: "Direct",
    visits: "2,050",
    progress: 65,
  },
  {
    channel: "Organic Search",
    visits: "1,405",
    progress: 45,
    color: "var(--mantine-color-success-4)",
  },
  {
    channel: "Social",
    visits: "540",
    progress: 25,
    color: "var(--mantine-color-error-4)",
  },
];

export { channels };
