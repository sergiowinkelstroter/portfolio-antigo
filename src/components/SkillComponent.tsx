import Image, { StaticImageData } from "next/image";

interface SkillComponentProps {
  image: StaticImageData;
  description: string;
  title: string;
}

export const SkillComponent = (props: SkillComponentProps) => {
  return (
    <div className="flex flex-col w-[180px] md:w-[280px] h-auto rounded-lg shadow-xl dark:shadow-white dark:shadow p-5 hover:scale-105 ease-in duration-300 hover:cursor-pointer">
      <h3 className="text-xl ">{props.title}</h3>

      <div className="flex flex-col mt-8 gap-4 text-start">
        <div className="m-auto">
          <Image src={props.image} width={200} height={220} alt="" />
        </div>
        <p className="text-sm hidden md:flex">{props.description}</p>
      </div>
    </div>
  );
};
