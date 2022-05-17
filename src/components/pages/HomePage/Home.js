import React from 'react'
import SunnahSection from '../../SunnahSection'
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'

export default function Home() {
  return (
    <>
        <SunnahSection {...homeObjOne}/>
        <SunnahSection {...homeObjTwo}/>
        <SunnahSection {...homeObjThree}/>
        <SunnahSection {...homeObjFour}/>
    </>
  )
}
