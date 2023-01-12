export interface SourcesTypes {
  types: string;
  sessions: number;
  views: number;
}
const sources: SourcesTypes[] = [
  {
    types: "Direct",
    sessions: 358,
    views: 250,
  },
  {
    types: "Referral",
    sessions: 501,
    views: 50,
  },
  {
    types: "Email",
    sessions: 460,
    views: 600,
  },
];

export { sources };
