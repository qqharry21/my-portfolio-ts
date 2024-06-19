export {};

import en from './messages/en.json';
import zh from './messages/zh-TW.json';

type Messages = typeof en | typeof zh;

declare global {
  interface IntlMessages extends Messages {}
  interface PropsWithChildren {
    children: React.ReactNode;
  }

  type PartialPropsWithChildren = Partial<PropsWithChildren>;

  interface WithClassName {
    className?: string;
  }
}
