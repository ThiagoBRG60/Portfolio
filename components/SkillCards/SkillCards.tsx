'use client'
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const SkillCard = ({skills}: ISkillCardProps) => {
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    <ul ref={ref} className={`${inView ? 'animate-fadeInScale' : ''} opacity-0 flex flex-wrap justify-center gap-[15px] px-5 xl:gap-[30px] xl:px-10 transition duration-[400ms]`}>
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