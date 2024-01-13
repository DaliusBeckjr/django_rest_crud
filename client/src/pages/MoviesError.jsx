import { Link, useRouteError } from "react-router-dom"

export default function MoviesError() {
    const error = useRouteError();
    return (
        <section className="section is-large">
            <h2>Error</h2>
            <p>{ error.message }</p>
            <Link to='/'> Home </Link>
        </section>
    )
}
