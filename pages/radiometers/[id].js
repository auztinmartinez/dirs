import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/post.module.css"

export default function Post(props) {
  const router = useRouter()
  return (
    <>
      <p>
        <Link href="/radiometers">
          <small>&laquo; back to all radiometers</small>
        </Link>
      </p>
      <h2 className={styles.name}>{props.radiometer.name}</h2>
      <p>ID: {props.radiometer.id}</p>
      <p>{props.radiometer.location}</p>
      <p>{props.radiometer.coordinates}</p>
      {/* <button className={styles.button} onClick={() => router.push("/radiometers")}>
        Click me to programmatically navigate or redirect
      </button> */}
    </>
  )
}

export async function getStaticPaths() {
  const response = await fetch("http://52.204.169.92:3000/getRadiometerInfo")
  const data = await response.json()

  const thePaths = data.radiometers.map(pet => {
    return { params: { id: pet.id } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

// get the data info for the radiometer
export async function getStaticProps(context) {
  const response = await fetch("http://52.204.169.92:3000/getRadiometerInfo")
  const data = await response.json()
  const theRadiometer = data.radiometers.filter(radiometer => radiometer.id === context.params.id)[0]

  return {
    props: {
      radiometer: theRadiometer,
      name: theRadiometer.name
    }
  }
}