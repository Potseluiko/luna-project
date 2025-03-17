import { Link } from "react-router"

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page.</p>
      <p>
        Here is <Link to={"/about"}>About page</Link>
      </p>
      <ol>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  )
}
