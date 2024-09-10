interface HeaderLinkTypes {
  id: number;
  name: string;
  href: string;
}

interface IHeaderProps {
  links: readonly HeaderLinkTypes[];
  className?: string
  isMobileMenu?: boolean
  isOtherPage?: boolean
  handleClick?: () => void
}