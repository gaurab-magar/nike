'use client'
import React from 'react'
import Headroom from 'react-headroom'
const HeadRoomWrap = ({children}) => {
  return (
    <Headroom>{children}</Headroom>
  )
}

export default HeadRoomWrap