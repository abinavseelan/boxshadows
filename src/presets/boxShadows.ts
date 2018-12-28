import { IBoxShadowOptions } from 'Src/pages/BoxShadows/types';

export interface IBoxShadowPresets extends IBoxShadowOptions {
  title: string;
}

export const BoxShadowPresets: IBoxShadowPresets[] = [
  {
    blur: 3,
    color: 'rgba(0, 0, 0, 0.12)',
    inset: false,
    offsetX: 0,
    offsetY: 1,
    spread: 0,
    title: 'Material Design - Elevation 1',
  },
  {
    blur: 6,
    color: 'rgba(0, 0, 0, 0.16)',
    inset: false,
    offsetX: 0,
    offsetY: 3,
    spread: 0,
    title: 'Material Design - Elevation 2',
  },
  {
    blur: 20,
    color: 'rgba(0, 0, 0, 0.19)',
    inset: false,
    offsetX: 0,
    offsetY: 10,
    spread: 0,
    title: 'Material Design - Elevation 3',
  },
  {
    blur: 28,
    color: 'rgba(0, 0, 0, 0.25)',
    inset: false,
    offsetX: 0,
    offsetY: 14,
    spread: 0,
    title: 'Material Design - Elevation 4',
  },
  {
    blur: 38,
    color: 'rgba(0, 0, 0, 0.30)',
    inset: false,
    offsetX: 0,
    offsetY: 19,
    spread: 0,
    title: 'Material Design - Elevation 5',
  },
];
