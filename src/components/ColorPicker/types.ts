export interface IColorPickerProps {
  value: string;
  label: string;
  name: string;
  onChange: (name: string, color: any) => void;
  inline?: boolean;
}

export interface IColorPickerState {
  open: boolean;
}
