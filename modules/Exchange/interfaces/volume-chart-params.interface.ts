export default interface VolumeChartParams {
  id: string;
  days: Range;
}

export type Range = 1 | 7 | 30;
