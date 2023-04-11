import React from 'react'
import Icon from './logo.svg'

const Logo = ({width, height, name}) => {
  return (
     <svg width={width} height={height} >
      <use href={Icon + `#${name}`}></use>
    </svg>
  )
}

export default Logo