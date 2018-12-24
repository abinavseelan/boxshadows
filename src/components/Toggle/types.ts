export interface IToggleProps {
  label: string;
  name: string;
  value: boolean;
  onChange: (e: React.SyntheticEvent) => void;
  inline?: boolean;
}
