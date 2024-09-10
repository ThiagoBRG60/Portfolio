import { skills } from "@/data/skills"
import SkillCard from "../SkillCards/SkillCards"

const SkillsSection = () => {
  return (
    <section id="skills" 
      className="relative h-auto py-10 flex flex-col justify-center 
      items-center gap-8 portrait:sm:h-dvh landscape:lg:h-dvh portrait:sm:peaksBgTop portrait:sm:bg-peaks-detail-bg landscape:lg:peaksBgTop landscape:lg:bg-peaks-detail-bg bg-no-repeat bg-bottom bg-contain">
      <h2 className="font-bold text-textPrimary text-xl 2xl:text-2xl">Skills</h2>
      <SkillCard skills={skills.knownSkills}/>
      <h2 className="font-bold text-textPrimary text-xl 2xl:text-2xl">Em Desenvolvimento</h2>
      <SkillCard skills={skills.pendingSkills}/>
    </section>
  )
}

export default SkillsSection