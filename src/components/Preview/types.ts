export interface IPreviewProps {
  boxShadow?: string;
  gradient?: string;
  backgroundColor?: string;
  editable?: boolean;
  height?: string;
  width?: string;
  copyHandler?: () => void;
  editHandler?: () => void;
}

export interface IPreviewState {
  copied: boolean;
}
