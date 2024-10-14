import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={26} height={26} fill="none" {...props}>
    <path
      fill="#fff"
      d="M22.387 4.027 3.18 11.434c-1.311.526-1.304 1.257-.241 1.583l4.931 1.539 11.41-7.199c.54-.328 1.032-.152.627.208l-9.244 8.343h-.002.002l-.34 5.084c.498 0 .718-.229.998-.498l2.395-2.33 4.982 3.68c.919.506 1.579.246 1.807-.85l3.27-15.414c.336-1.342-.511-1.95-1.388-1.553Z"
    />
  </svg>
);
export default SvgComponent;
