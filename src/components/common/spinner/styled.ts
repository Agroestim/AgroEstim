import styled from "styled-components";

export const SVGSpinner = styled.svg`
  --color: ${({ theme }) => theme.backgroundColorSecondary};
  --size: 40px;
  height: var(--size);
  width: var(--size);
  transform-origin: center;
  animation: rotate 2s linear infinite;
  will-change: transform;
  overflow: visible;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes stretch {
    0% {
      stroke-dasharray: 0, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 75, 150;
      stroke-dashoffset: -25;
    }
    100% {
      stroke-dashoffset: -100;
    }
  }
`;

export const Car = styled.circle`
  fill: none;
  stroke: var(--color);
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: stretch calc(2s * 0.75) ease-in-out infinite;
  will-change: stroke-dasharray, stroke-dashoffset;
  transition: stroke 0.5s ease;
`;

export const Track = styled.circle`
  fill: none;
  stroke: var(--uib-color);
  opacity: var(--uib-bg-opacity);
  transition: stroke 0.5s ease;
`;
