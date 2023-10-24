import React from 'react';

type SpinLoaderProps = React.ComponentProps<'svg'> & {
  size: number;
  color?: string;
};

export const SpinLoader = ({
  size,
  color = '#92e3a9',
  ...props
}: SpinLoaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        // xmlns:xlink='http://www.w3.org/1999/xlink'
        style={{
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
          alignSelf: 'center',
        }}
        width={size}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <circle
          cx='50'
          cy='50'
          fill='none'
          stroke={color}
          strokeWidth='5'
          r='35'
          strokeDasharray='164.93361431346415 56.97787143782138'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='0.7874015748031495s'
            values='0 50 50;360 50 50'
            keyTimes='0;1'
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};
