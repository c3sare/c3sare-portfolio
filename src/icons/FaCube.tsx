import * as React from "react";

function IconCube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6c25.4 9.1 42.4 33.2 42.4 60.3v242.8c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188l-160 57.1v188z" />
    </svg>
  );
}

export default IconCube;
