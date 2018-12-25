export interface IRangeSliderProps {
  value: number;
  name: string;
  min: number;
  max: number;
  label?: string;
  onChange: (e: React.SyntheticEvent) => void;
}
