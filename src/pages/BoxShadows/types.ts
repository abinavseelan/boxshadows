export interface IBoxShadowProps {
  path: string;
}

export interface IBoxShadowState {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  previewColor: string;
  inset: boolean;
}

export interface IBoxShadowPreviewProps {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  previewColor: string;
  inset: boolean;
}
