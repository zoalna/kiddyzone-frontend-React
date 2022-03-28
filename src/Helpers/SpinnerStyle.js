import { keyframes, css } from '@emotion/react'

const clip = keyframes`
0% {transform: rotate(0deg) scale(1)}
50% {transform: rotate(180deg) scale(0.8)}
100% {transform: rotate(360deg) scale(1)}
`

export const override = css`
  background: transparent !important;
  border-radius: 100%;
  border: 2px solid;
  border-color: white;
  border-bottom-color: transparent;
  display: inline-block;
  animation: ${clip} 0.75s 0s infinite linear;
  animation-fill-mode: both;
`
