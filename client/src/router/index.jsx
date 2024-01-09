import Home, { moviesLoader } from '../pages/Home'
import Create, { createAction } from '../pages/Create';
import RootLayout from '../layouts/RootLayout'
import HelpLayout from '../layouts/HelpLayout';
import NotFound from '../pages/NotFound';
import MovieDetails, { movieDetailsLoader } from '../pages/MovieDetails';
import MoviesError from '../pages/MoviesError';

const Root = [
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <MoviesError />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: moviesLoader,
            },
            {
                path: ':id',
                element: <MovieDetails />,
                loader: movieDetailsLoader,
            },
            {
                path: 'movie-create',
                element: <Create />,
                action: createAction,
            },
            {
                path: 'help',
                element: <HelpLayout />,
                children: [
                    {
                        path: 'faq',
                    },
                    {
                        path: 'contact',
                    }
                ]
            },
            {
                path: '*',
                element: <NotFound />
            }
        ] // children (root layout)
    } // root layout end

]

export default Root;