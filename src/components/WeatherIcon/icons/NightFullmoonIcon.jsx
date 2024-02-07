import React from "react";
const NightFullmoonIcon = (props) => (
  <svg
    // width={272}
    // height={267}
    viewBox="0 0 272 267"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_bdd_2_794)">
      <mask id="path-1-inside-1_2_794" fill="white">
        <path d="M233.315 120.023C233.315 164.814 197.005 201.124 152.215 201.124C107.424 201.124 71.1143 164.814 71.1143 120.023C71.1143 75.2327 107.424 38.9229 152.215 38.9229C197.005 38.9229 233.315 75.2327 233.315 120.023Z" />
      </mask>
      <path
        d="M233.315 120.023C233.315 164.814 197.005 201.124 152.215 201.124C107.424 201.124 71.1143 164.814 71.1143 120.023C71.1143 75.2327 107.424 38.9229 152.215 38.9229C197.005 38.9229 233.315 75.2327 233.315 120.023Z"
        fill="url(#paint0_linear_2_794)"
      />
      <path
        d="M231.315 120.023C231.315 163.709 195.901 199.124 152.215 199.124V203.124C198.11 203.124 235.315 165.918 235.315 120.023H231.315ZM152.215 199.124C108.529 199.124 73.1143 163.709 73.1143 120.023H69.1143C69.1143 165.918 106.32 203.124 152.215 203.124V199.124ZM73.1143 120.023C73.1143 76.3373 108.529 40.9229 152.215 40.9229V36.9229C106.32 36.9229 69.1143 74.1282 69.1143 120.023H73.1143ZM152.215 40.9229C195.901 40.9229 231.315 76.3373 231.315 120.023H235.315C235.315 74.1282 198.11 36.9229 152.215 36.9229V40.9229Z"
        fill="url(#paint1_linear_2_794)"
        mask="url(#path-1-inside-1_2_794)"
      />
    </g>
    <defs>
      <filter
        id="filter0_bdd_2_794"
        x={0.114258}
        y={0.922852}
        width={271.201}
        height={265.201}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={7} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_794"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={-21} dy={15} />
        <feGaussianBlur stdDeviation={25} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.113438 0 0 0 0 0.148981 0 0 0 0 0.275 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_backgroundBlur_2_794"
          result="effect2_dropShadow_2_794"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={19} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.619608 0 0 0 0 0.423529 0 0 0 0 1 0 0 0 0.4 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_2_794"
          result="effect3_dropShadow_2_794"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect3_dropShadow_2_794"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2_794"
        x1={148.532}
        y1={40.3516}
        x2={148.532}
        y2={202.552}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.0001} stopColor="#DECFFF" />
        <stop offset={1} stopColor="#7E2FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2_794"
        x1={201.669}
        y1={-26.4822}
        x2={163.724}
        y2={166.454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default NightFullmoonIcon;
