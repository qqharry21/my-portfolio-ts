export {};

import en from './messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
  var _mongoClientPromise: Promise<MongoClient> | undefined;
  interface PropsWithChildren {
    children: React.ReactNode;
  }

  type PartialPropsWithChildren = Partial<PropsWithChildren>;

  interface WithClassName {
    className?: string;
  }

  interface IconProps extends React.SVGProps<SVGSVGElement> {}
}
