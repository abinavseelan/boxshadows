export interface IColorPickerProps {
  value: string;
  label: string;
  name: string;
  onChange: (name: string, color: any) => void;
}

export interface IColorPickerState {
  open: boolean;
}
