export default function About(props) {
    return (
      <>
        <h2>About Us</h2>
        <p>I have {props.repoCount} public repos on GitHub.</p>
      </>
    )
  }
  
  export async function getStaticProps() {
    const response = await fetch("https://api.github.com/users/learnwebcode")
    const data = await response.json()
  
    return {
      props: {
        repoCount: data.public_repos
      },
      revalidate: 10 // dynamically re-fetch data every 10 seconds
    }
  }