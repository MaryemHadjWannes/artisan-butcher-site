import * as React from "react";

export function CartIcon({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h2l3.6 7.59a2 2 0 0 0 1.7 1.18h9.72a2 2 0 0 0 1.7-1.18l3.24-6.41A1 1 0 0 0 21.42 2H6" />
    </svg>
  );
}
