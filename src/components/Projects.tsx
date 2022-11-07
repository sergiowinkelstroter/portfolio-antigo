import "swiper/css/navigation";
import "swiper/css";
import { ProjectItem } from "./ProjectItem";
import { ProjectsData } from "../data/ProjectsData";

export const Projects = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 mb-6 justify-center items-center">
      {ProjectsData.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          demo={project.demo}
          repo={project.repo}
        />
      ))}
    </div>
  );
};
