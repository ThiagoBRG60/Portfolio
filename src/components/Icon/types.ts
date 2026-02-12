type FontAwesomeIcon = "github" | "arrow-up-right-from-square" | "arrow-right" |
   "arrow-left" | "chevron-right" | "chevron-left" | "user" | "envelope" |
   "pen-to-square" | "linkedin" | "bars" | "x-mark" | "circle-check" |
   "circle-x-mark" | "bell" | "box-archive" | "chart-column" |
   "circle-half-stroke" | "cloud-sun" | "download" | "droplet-slash" |
   "file-zipper" | "floppy-disk" | "folder-open" | "font" | "language" |
   "layer-group" | "location-crosshairs" | "microphone" | "note-sticky" |
   "server" | "sliders" | "tags" | "terminal" | "volume-high"

type TechIcon = "nodejs" | "nextjs" | "react" | "typescript" |
   "tailwind" | "redux" | "zustand" | "javascript" | "react-native" |
   "docker" | "styled-components" | "html" | "css" | "sass" | "git"

interface IconProps {
   name: FontAwesomeIcon | TechIcon
   className?: string
   type: "fontAwesome" | "techIcons"
}

export type { IconProps, FontAwesomeIcon, TechIcon }