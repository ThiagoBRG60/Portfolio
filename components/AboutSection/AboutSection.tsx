import { aboutTexts } from "@/data/aboutTexts";

const AboutSection = () => {
  return (
    <section id="sobre" 
      className="flex flex-col gap-[25px] justify-center px-5 portrait:sm:h-dvh landscape:h-auto landscape:lg:h-dvh md:px-20
      portrait:sm:bg-peaks-detail-bg landscape:lg:bg-peaks-detail-bg bg-bottom bg-no-repeat bg-contain py-20 lg:px-40 xl:px-80 2xl:px-[22vw] 2xl:py-[25vh] 2xl:justify-normal">
      <h2 className="font-bold text-textPrimary text-xl 2xl:text-2xl">Sobre Mim</h2>
      {aboutTexts.map(text => (
        <div key={text.id} className="text-sm sm:text-base text-textSecondary 2xl:text-lg">
          {text.content.map((part, index) => (
            <p key={index} className={`${part.highlight ? 'text-highlight font-medium' : ''} inline`}>
              {part.text}
            </p>
          ))}
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
