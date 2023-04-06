import * as React from "react";

function IconClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0s-71 27.48-78.4 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128c0-35.34-28.7-64-64-64zM192 48c13.23 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24zm144 400c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26c-1.33 5.1-2.26 10.4-2.26 16v16c0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16v-16c0-5.559-.932-10.86-2.264-16H320c8.822 0 16 7.18 16 16v320z" />
    </svg>
  );
}

export default IconClipboard;
