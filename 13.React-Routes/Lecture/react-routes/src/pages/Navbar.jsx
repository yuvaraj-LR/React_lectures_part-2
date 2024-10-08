import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/item">Item</Link>
        </div>
    )
}

export default Navbar;