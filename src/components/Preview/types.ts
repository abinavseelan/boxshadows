export interface IPreviewProps {
  boxShadow?: string;
  gradient?: string;
  backgroundColor?: string;
  editable?: boolean;
  height?: string;
  width?: string;
  onCopy?: () => void;
  onTweak?: () => void;
}

export interface IPreviewState {
  copied: boolean;
}
