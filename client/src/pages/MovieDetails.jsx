import { useLoaderData, useNavigate, useParams } from "react-router-dom";


export default function MovieDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const movie = useLoaderData();

    const handleDelete = async () => {
        
            const res = await fetch(`http://localhost:8000/api/movie-delete/${ id }`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw Error('could not delete this movie')
            }

            navigate('/');
    }

    return (
        <section className="section is-medium">
            <h2>Movie Details for {movie.title}</h2>
            <p>Description: {movie.description}</p>
            <button className="button" onClick={handleDelete}>Delete</button>
        </section>
    )
}

// movie details loader
export const movieDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`http://localhost:8000/api/movie-detail/${ id }`);

    if(!res.ok) {
        throw Error('Could not fetch the  movie')
    }

    return res.json();
}