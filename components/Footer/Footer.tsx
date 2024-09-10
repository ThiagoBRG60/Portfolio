import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-5 absolute bottom-0 w-full h-[60px] border-t-[1px] border-highlight border-opacity-50 bg-background md:h-[70px] md:px-[75px] xl:px-[150px] 2xl:px-[385px]">
      <p className="text-textSecondary font-bold">
         &copy; {new Date().getFullYear()} Thiago Correa
      </p>
      <SocialMediaLinks isFooter={true}/>
    </footer>
  )
}

export default Footer