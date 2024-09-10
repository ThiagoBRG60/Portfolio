import Image from "next/image";

const SkillCard = ({skills}: ISkillCardProps) => {
  return (
    <ul className="flex flex-wrap justify-center gap-[15px] px-5 xl:gap-[30px] xl:px-10">
      {skills.map((skill, index) => (
        <li key={index} className="w-[130px] h-[130px] flex flex-col gap-2 text-center justify-center items-center border-2 border-highlight rounded-[20px] text-textPrimary font-semibold 2xl:w-[135px] 2xl:h-[135px]">
          <Image src={skill.image} alt={skill.alt} width={40} height={40} className="w-10 h-10" priority/>
          <p>{skill.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default SkillCard;
