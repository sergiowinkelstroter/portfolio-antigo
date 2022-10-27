import Image, { StaticImageData } from "next/image";

interface ProjectItemProps {
  title: string;
  description: string;
  repo: string;
  image: StaticImageData;
  demo: string;
}

export const ProjectItem = ({
  title,
  description,
  repo,
  image,
  demo,
}: ProjectItemProps) => {
  return (
    <div
      className="w-[300px] md:w-[350px] lg:w-[380px] h-[500px]  dark:bg-[#27303d]   p-5 m-auto mt-32 flex flex-col justify-evenly items-center shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer
    "
    >
      <h3 className="text-2xl mb-6">{title}</h3>
      <div className=" flex flex-col justify-center items-center gap-5">
        <Image src={image} className="rounded-lg " />
        <p>{description}</p>
      </div>
      <div className="flex justify-center gap-2 mt-4 flex-col md:flex-row">
        <div className="bg-blue-600 w-40 h-10 p-2 rounded-lg text-white hover:bg-blue-900 hover:cursor-pointer text-center">
          <a target="_blank" rel="noreferrer" href={repo}>
            Ver codigo
          </a>
        </div>
        <div className="bg-blue-600 w-40 h-10 p-2 rounded-lg text-white hover:bg-blue-900 hover:cursor-pointer text-center">
          <a target="_blank" rel="noreferrer" href={demo}>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};
