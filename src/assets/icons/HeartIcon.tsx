import * as React from "react";
import { SVGProps } from "react";
const SvgHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.188.31c-1.936 0-3.631.832-4.688 2.24C9.443 1.141 7.748.31 5.812.31A5.819 5.819 0 0 0 0 6.122c0 6.563 9.73 11.875 10.145 12.095a.75.75 0 0 0 .71 0C11.27 17.997 21 12.685 21 6.122A5.82 5.82 0 0 0 15.187.31ZM10.5 16.698c-1.712-.998-9-5.542-9-10.576A4.318 4.318 0 0 1 5.813 1.81c1.823 0 3.354.971 3.993 2.531a.75.75 0 0 0 1.388 0c.64-1.563 2.17-2.531 3.993-2.531A4.318 4.318 0 0 1 19.5 6.122c0 5.027-7.29 9.577-9 10.576Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgHeartIcon;
