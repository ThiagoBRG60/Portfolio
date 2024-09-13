import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import settings from '@/data/carouselConfig';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AllProjectsDetails } from "@/data/allProjectsDetails";
import '/app/carousel.css';

const AllProjectsCard = () => {
   return (
      <div className='w-[calc(300px+20px)] h-[400px] mt-5 md:w-[calc(620px+20px)] xl:w-[calc(940px+20px)] 2xl:w-[calc(1580px+20px)]'>
         <Slider {...settings}>
            {AllProjectsDetails.map(project => (
               <div key={project.id} className="w-[300px] h-[400px]">
                  <div className="flex flex-col w-full h-full border-[1px] border-highlight rounded-[10px] overflow-hidden">
                     <div className='w-full h-[150px] rounded-t-[10px]' style={{background: `url(${project.image})`, backgroundSize: 'cover'}}></div>
                     <div className='flex-1 py-2 px-5 flex flex-col text-center xs:text-left'>
                        <p className='text-textSecondary text-sm px-4 mt-4 xxs:mt-2 xxs:px-0 xs:mt-0 xl:text-base'>
                           {project.description}
                        </p>
                        <ul className="flex justify-center flex-wrap gap-x-2 gap-y-1 mt-[10px] mb-6 xs:justify-normal">
                           {project.techs.map((tech, index) => (
                              <li key={index} className='text-textPrimary text-sm xl:text-base'>
                                 {tech}
                              </li>
                           ))}
                        </ul>
                        <div className="mt-auto flex gap-5 text-textSecondary text-sm xl:text-base">
                           <a className="text-highlight text-opacity-70 flex items-center gap-1 transition duration-300 hover:text-highlight" href={project.website} target="_blank">
                              Ver Website
                              <FontAwesomeIcon className="w-4" icon={faGlobe}/>
                           </a>
                           <a className="text-highlight text-opacity-70 flex items-center gap-1 transition duration-300 hover:text-highlight" href={project.github} target="_blank">
                              Repositório
                              <FontAwesomeIcon className="w-4" icon={faGithub}/>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
      </div>
   );
};

export default AllProjectsCard;