export interface PlatformTypes {
  system: string;
  visits: string;
  progress: number;
}

const platforms: PlatformTypes[] = [
  {
    system: "Linux",
    visits: "2,250",
    progress: 65,
  },
  {
    system: "Android",
    visits: "1,501",
    progress: 45,
  },
  {
    system: "Windows",
    visits: "750",
    progress: 30,
  },
];

export { platforms };
