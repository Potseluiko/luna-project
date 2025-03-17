import { Link, useParams } from "react-router"

export const Article = () => {
  const { id } = useParams()

  return (
    <div style={{ padding: "20px", border: "1px solid purple" }}>
      <h1>Article id = {id}</h1>
      <p>Article Article Article Article.</p>
      <Link to="/articles">Articles list</Link>
    </div>
  )
}
