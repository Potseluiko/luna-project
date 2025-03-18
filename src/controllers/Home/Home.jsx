import { Link } from "react-router"

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the Home page.</p>
      <p>
        Here is <Link to={"/about"}>About page</Link>
      </p>
      <p>
        Here is <Link to={"/admin"}>Admin</Link>
      </p>
      <p>Useful info</p>
      <ol>
        <li>Info 1</li>
        <li>Info 2</li>
        <li>Info 3</li>
        <li>Info 4</li>
      </ol>
    </div>
  )
}
