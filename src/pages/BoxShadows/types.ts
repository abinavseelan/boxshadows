export interface IBoxShadowProps {
  path: string;
}

export interface IBoxShadowOptions {
  offsetX: number;
  offsetY: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
}

export interface IBoxShadowState extends IBoxShadowOptions {
  previewColor: string;
}
