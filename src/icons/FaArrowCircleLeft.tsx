import * as React from "react";

function IconCircleArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256 256-114.6 256-256zM215 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71 214.1.1c13.3 0 24 10.7 24 24s-10.7 24-24 24H177.9l71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L103 273c-9.4-9.4-9.4-24.6 0-33.9L215 127z" />
    </svg>
  );
}

export default IconCircleArrowLeft;
