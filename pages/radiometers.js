import Link from "next/link"
import RadiometerCard from "../components/radiometerCard"

export default function Radiometers(props) {
  return (
    <>
      <h2>Radiometers</h2>
      <RadiometerCard />
      {props.radiometers.map((radiometer, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/radiometers/${radiometer.id}`}>{radiometer.name}</Link>
            </h3>
            <p>ID: {radiometer.id}</p>
            <p>{radiometer.location}</p>
            <p>{radiometer.coordinates}</p>
            <hr />
          </div>
        )
      })}
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