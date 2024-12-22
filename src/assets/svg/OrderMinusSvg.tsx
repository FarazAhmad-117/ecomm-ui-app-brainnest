import * as React from 'react';

export const OrderMinusSvg: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      fill='none'
    >
      <rect
        width={30}
        height={30}
        fill='#F5FAFB'
        rx={15}
      />
      <path
        stroke='#1E2538'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.2}
        d='M11 15h8.114'
      />
    </svg>
  );
};
