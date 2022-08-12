import { useLocation } from "react-router-dom";
import logo from '../../../assets/img/logo.png';
import Navlink from "./Navlink";
import { Link } from 'react-router-dom'
const Navbar = ({ routes, show, func }) => {
    //-----
    const location = useLocation();
    // --
    routes = routes.map(route => {
        if (location.pathname === route.route) route.current = true;
        else route.current = false;
        return route;
    });
    //-----

    return (
        <div className={`navbar-container ${show ? 'show' : 'hide'}`} onClick={() => func(!show)}>
            <nav>
                <Link className='nav-brand' to='/'>
                    <img src={logo} className='app-logo' alt="" />
                </Link>
                {routes.map(route => <Navlink key={route.key} route={route} />)}
            </nav>
        </div>
    )
}

export default Navbar