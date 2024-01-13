import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar is-fixed-top">
                {/* navbar logo */}
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <h1 className="is-size-3 has-text-weight-bold">
                            Alt <span className="has-text-primary">Cinema</span>
                        </h1>
                    </div>
                {/* navbar burger */}
                <NavLink className={`navbar-burger pr-6`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavLink>
                </div>

                {/* navbar menu */}
                <div className="navbar-menu">
                    <div className="navbar-end pr-4">
                        <NavLink to="/" className="navbar-item has-text-primary">
                            Home
                        </NavLink>
                        <NavLink to="movie-create" className="navbar-item has-text-primary">
                            Add Movie
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;