type Point = [number, number];

export interface Polygon {
  id: number;
  points: Point[];
  label: string;
  fillColor: string;
  strokeColor: string;
}
