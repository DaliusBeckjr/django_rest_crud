import { useLoaderData, Link } from "react-router-dom";

export default function Home() {
    const movies = useLoaderData()

    return (
    <div>
        <section className="section is-large">
        <h1 className="is-size-1 has-text-weight-bold has-text-centered mb-4">Dashboard</h1>
            { movies.map(movie => (
                <Link to={movie.id.toString()} key={movie.id} className="box">
                    <p className="is-size-3 has-text-weight-semibold is-capitalized">{movie.title}</p>
                </Link>
            ))}
        </section>
    </div>
    )
}

// loaders function
export const moviesLoader = async () => {
    const apiURI = 'http://localhost:8000/api';
    const res = await fetch(apiURI)

    if(!res.ok){
        throw Error('could not fetch the movies')
    }

    return res.json()
}
