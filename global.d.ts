export {};

import message from './messages/en.json';
import zodMessage from './messages/zod/en.json';

type Messages = typeof message;
type ZodMessages = typeof zodMessage;

declare global {
  interface IntlMessages extends Messages, ZodMessages {}
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
