import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      <div>
        <h1>
          <Link href="/">DIRS Radiometer Project</Link>
        </h1>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/about" ? "active" : ""} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/radiometers" || router.pathname == "/radiometers/[slug]" ? "active" : ""} href="/radiometers">
                Radiometers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
      <div className="site-footer">
        <p>Chester F. Carlson Center for Imaging Science, Rochester Institute of Technology, Rochester, New York, all rights reserved &copy;</p>
      </div>
    </>
  )
}