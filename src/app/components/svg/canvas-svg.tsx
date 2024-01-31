import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const CanvasSVG = (props: IProps) => {
  const { children } = props;
  return (
    <svg
      width="488"
      height="620"
      viewBox="0 0 488 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="app__svg__wrapper"
    >
      <g filter="url(#filter0_b_270_2692)">
        <path
          d="M1 41V335.561C1 343.662 3.45987 351.573 8.05409 358.245L14.9459 368.255C19.5401 374.927 22 382.838 22 390.939V579C22 601.091 39.9086 619 62 619H435.758C450.128 619 463.393 611.292 470.509 598.808L482.251 578.209C485.691 572.174 487.5 565.347 487.5 558.401V70.5C487.5 48.4086 469.591 30.5 447.5 30.5H329.426C321.47 30.5 313.839 27.3393 308.213 21.7132L293.358 6.85786C289.607 3.10714 284.52 1 279.216 1H41C18.9086 1 1 18.9086 1 41Z"
          fill="url(#paint0_linear_270_2692)"
        />
        <path
          d="M1 41V335.561C1 343.662 3.45987 351.573 8.05409 358.245L14.9459 368.255C19.5401 374.927 22 382.838 22 390.939V579C22 601.091 39.9086 619 62 619H435.758C450.128 619 463.393 611.292 470.509 598.808L482.251 578.209C485.691 572.174 487.5 565.347 487.5 558.401V70.5C487.5 48.4086 469.591 30.5 447.5 30.5H329.426C321.47 30.5 313.839 27.3393 308.213 21.7132L293.358 6.85786C289.607 3.10714 284.52 1 279.216 1H41C18.9086 1 1 18.9086 1 41Z"
          stroke="url(#paint1_linear_270_2692)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_270_2692"
          x="-13.5"
          y="-13.5"
          width="515.5"
          height="647"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_270_2692"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_270_2692"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_270_2692"
          x1="21"
          y1="-116"
          x2="507"
          y2="986"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0551865" stopColor="white" stopOpacity="0.06" />
          <stop offset="0.0964484" stopColor="white" stopOpacity="0" />
          <stop offset="0.947398" stopColor="white" stopOpacity="0.11" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_270_2692"
          x1="-57"
          y1="-118"
          x2="488"
          y2="870"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0603094" stopColor="#00C978" />
          <stop offset="0.332492" stopColor="#4F56F1" stopOpacity="0.45" />
          <stop offset="0.501764" stopColor="#00C978" stopOpacity="0.51" />
          <stop offset="0.67398" stopColor="#4F56F1" stopOpacity="0.45" />
          <stop offset="0.856094" stopColor="#00C978" stopOpacity="0.69" />
        </linearGradient>
      </defs>

      <foreignObject width="100%" height="100%">
        <div className="foreign__object__wrapper">{children}</div>
      </foreignObject>
    </svg>
  );
};

export default CanvasSVG;
