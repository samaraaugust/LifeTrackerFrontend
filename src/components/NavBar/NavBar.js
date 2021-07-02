import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar({ user, handleLogout })
{
    return (
        <nav className="navBar">
            <div className="content">
                <span className="logo">
                    <Link to="/"><img src="https://student-store.surge.sh/static/media/codepath.70a9a31f.svg" alt="CodePath logo"></img></Link>
                </span>
                <ul className="links">
                    <Link to="/Activity"><li>Activity</li></Link>
                    <Link to="/Exercise"><li>Exercise</li></Link>
                    <Link to="/Nutrition"><li>Nutrition</li></Link>
                    <Link to="/Sleep"><li>Sleep</li></Link>

                    {user?.email?
                    (
                    <>
                    <li>
                        <button onClick={handleLogout} className="btn">Sign Out</button>
                    </li>
                    </>
                    )
                    : (
                        <>
                        <li>
                        <Link to="/Login"><button className="btn">Login</button></Link>
                        </li>
                        <li>
                        <Link to="/Register"><button className="btn">Register</button></Link> 
                        </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}