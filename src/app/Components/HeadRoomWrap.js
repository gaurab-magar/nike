'use client'
import React from 'react'
import Headroom from 'react-headroom'
const HeadRoomWrap = ({children}) => {
  return (
    <Headroom style={{ zIndex: 100 }}>{children}</Headroom>
  )
}

export default HeadRoomWrap