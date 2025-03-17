import { Link } from "react-router"

export const Articles = () => {
  return (
    <div style={{ padding: "20px", border: "1px solid purple" }}>
      <h1>Articles</h1>
      <p>Articlessss.</p>
      <p>
        <Link to="/articles/1">Article 1</Link>
      </p>
    </div>
  )
}
