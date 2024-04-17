import * as React from "react";
import { SVGProps } from "react";
const SvgStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m7 0 1.572 4.491h5.085L9.543 7.267l1.572 4.492L7 8.983l-4.114 2.776 1.571-4.492L.343 4.491h5.085L7 0Z"
      fill="#891409"
    />
  </svg>
);
export default SvgStarIcon;
