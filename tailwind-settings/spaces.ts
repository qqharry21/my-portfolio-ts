/*
 * Tailwind Screens Settings
 */

import { settings } from './settings';

const height = {
  ...settings.extendedLength,
  inherit: 'inherit',
  'screen-1/2': '50vh',
  'screen-3/2': '150vh',
  'screen-2': '200vh',
  'screen-3': '300vh',
  default: 'var(--gw)',
};

const width = {
  ...settings.extendedLength,
  inherit: 'inherit',
  'screen-1/2': '50vw',
  screen: '100vw',
  'screen-3/2': '150vw',
  'screen-2': '200vw',
  'screen-3': '300vw',
  '9/10': '90%',
  default: 'var(--gw)',
};

export const spaces = { height, width };
