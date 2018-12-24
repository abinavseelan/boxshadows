export interface IRangeSliderProps {
  value: number;
  name: string;
  min: number;
  max: number;
  label?: string;
  inline?: boolean;
  onChange: (e: React.SyntheticEvent) => void;
}
