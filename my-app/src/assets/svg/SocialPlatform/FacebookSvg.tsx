import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={24} fill="none" {...props}>
    <path
      fill="#fff"
      d="M9.829 3.834H12V.162A30.156 30.156 0 0 0 8.835 0c-3.141 0-5.29 1.917-5.29 5.428v3.026H0v4.112h3.546v10.533h4.25V12.566h3.534l.531-4.112H7.796V5.833c0-1.213.323-1.999 2.033-1.999Z"
    />
  </svg>
);
export default SvgComponent;
