import type { Project } from '@/lib/types';

import { ProjectItem } from './project-item';

export const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className='auto-grid w-full gap-8 [--min-col-size:30rem]'>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
};
