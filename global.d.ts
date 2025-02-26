export {};

import message from './messages/en.json';
import sideProjectMessage from './messages/side_projects/en.json';
import workExperienceMessage from './messages/work_experience/en.json';
import zodMessage from './messages/zod/en.json';

type Messages = typeof message;
type ZodMessages = typeof zodMessage;
type SideProjectsMessages = typeof sideProjectMessage;
type WorkExperienceMessages = typeof workExperienceMessage;

declare global {
  interface IntlMessages
    extends Messages,
      ZodMessages,
      SideProjectsMessages,
      WorkExperienceMessages {}
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
