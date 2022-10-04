import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  repo: string;
  image: StaticImageData;
  demo: string;
}

export const ProjectItem = (props: ProjectItemProps) => {
  return (
    <div className="w-[300px] md:w-[350px] h-[600px] m-auto flex flex-col justify-center items-center">
      <h3 className="text-2xl mb-6">{props.title}</h3>
      <div className=" flex flex-col justify-center items-center gap-5">
        <Image src={props.image} className="rounded-lg " />
        <p>{props.description}</p>
      </div>
      <div className="flex justify-center gap-5 mt-4">
        <a
          target="_blank"
          rel="noreferrer"
          href={props.repo}
          className="bg-blue-600 w-40 h-10 p-2 rounded-lg text-white hover:bg-blue-900 hover:cursor-pointer"
        >
          Ver codigo
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={props.demo}
          className="bg-blue-600 w-40 h-10 p-2 rounded-lg text-white hover:bg-blue-900 hover:cursor-pointer"
        >
          Demo
        </a>
      </div>
    </div>
  );
};
