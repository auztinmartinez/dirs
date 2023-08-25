import Link from "next/link"
import RadiometerCard from "../components/radiometerCard"
import ExpandedRadiometerCard from "../components/expandedRadiometerCard"
import { useState, useEffect } from 'react';

// card implementation for radiometer list
export default function Radiometers(props) {

  const [rad_pressed, setPressed] = useState(props.radiometers[0]);

  const handleClick = (rad) => {
    // console.log(rad.name + " was clicked");
    setPressed(rad);
  }

  return (
    <>
      <div className="flex gap-4 py-4">
        <div className="flex flex-col gap-2 ">
          {props.radiometers.map((radiometer, index) => (
            <RadiometerCard key={index} rad={(radiometer)} onCardClick={() => handleClick(radiometer)} className="flex flex-col"/>
          ))}
        </div>
        <div className="flex flex-row">
          <ExpandedRadiometerCard rad={rad_pressed}/>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://52.204.169.92:3000/getRadiometerInfo")
  const data = await response.json()

  return {
    props: {
        radiometers: data.radiometers
    }
  }
}