export default function About(props) {
    return (
      <>
        <h2>About Us</h2>
        <p>The UTC time is {props.time}.</p>
      </>
    )
  }
  
  export async function getStaticProps() {
    const response = await fetch("http://52.204.169.92:3000/utcnow")
    const data = await response.json()
  
    return {
      props: {
        // repoCount: data.public_repos
        time: data
      },
      revalidate: 10 // dynamically re-fetch data every 10 seconds
    }
  }