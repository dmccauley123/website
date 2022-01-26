/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpaceShuttle,
  faUserAstronaut,
  faRocket,
  faAtom,
  faDollarSign,
  faGlobeAmericas,
  faDice,
} from '@fortawesome/free-solid-svg-icons'

const icons = {
  triangle: {
    shape: (
      <FontAwesomeIcon icon={faSpaceShuttle} />
    ),
    viewBox: `0 0 30 30`,
  },
  circle: {
    shape: (
      <FontAwesomeIcon icon={faUserAstronaut} />
    ),
    viewBox: `0 0 30 30`,
  },
  arrowUp: {
    shape: (
      <FontAwesomeIcon icon={faRocket} />
    ),
    viewBox: `0 0 30 42`,
  },
  upDown: {
    shape: (
      <FontAwesomeIcon icon={faAtom} />
    ),
    viewBox: `0 0 30 44.58`,
  },
  box: {
    shape: (
      <FontAwesomeIcon icon={faDollarSign} />
    ),
    viewBox: `0 0 30 30`,
  },
  hexa: {
    shape: (
      <FontAwesomeIcon icon={faGlobeAmericas} />
    ),
    viewBox: `0 0 30 30`,
  },
  cross: {
    shape: (
      <FontAwesomeIcon icon={faDice} />
    ),
    viewBox: `0 0 100 100`,
  },
}

type IconType = "triangle" | "circle" | "arrowUp" | "upDown" | "box" | "hexa" | "cross"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const Svg = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default Svg
