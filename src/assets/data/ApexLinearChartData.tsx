export interface Point {
  x: number;
  y: number;
}
export interface ApexLinearChartData {
  [key: string]: number[] | Point[] | [number, number][];
}
const lineChartWithData: ApexLinearChartData = {
  data1: [28, 29, 33, 36, 32, 32, 33],
  data2: [12, 11, 14, 18, 17, 13, 13],
};

export { lineChartWithData };
