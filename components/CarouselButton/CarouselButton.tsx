import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselButton = ({ direction, onClick }: CarouselProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-[45%] ${direction === "left" ? "left-0" : "right-0"} w-12 h-12 flex items-center justify-center rounded-full border-[1px] border-highlight bg-background text-textPrimary xs:${direction === "left" ? "left-2" : "right-2"} ${direction === "left" ? "lg:left-32" : "lg:right-32"} ${direction === "left" ? "xl:left-24" : "xl:right-24"} 2xl:hidden`}>
      <FontAwesomeIcon className="w-3" icon={direction === "left" ? faChevronLeft : faChevronRight} />
    </button>
  );
};

export default CarouselButton;
