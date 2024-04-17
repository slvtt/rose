import * as React from "react";
import { SVGProps } from "react";
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.933 1.471v9.175m0 9.174v-9.174m0 0h-9.83m9.83 0h9.252"
      stroke="currentColor"
      strokeWidth={1.359}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgPlusIcon;
