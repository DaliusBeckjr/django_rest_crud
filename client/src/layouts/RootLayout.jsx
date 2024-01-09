import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <h1 className='title'>Binger</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="movie-create">Create</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
