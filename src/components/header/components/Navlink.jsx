import { Link } from 'react-router-dom';

const Navlink = ({ route }) => {
    const current = route.current ? 'current' : '';
    if (['cart', 'vote', 'tickets'].includes(route.key)) route.name = route.name.toUpperCase();
    if(route.style === undefined) route.style = {};
    //----
    return (
        <div className={`nav-item ${current} ${route.styleClass}`}>
            <Link to={route.route}>
                <span>{route.name}</span>
                {route.icon ? route.icon : ''}
            </Link>
        </div>
    )
}

export default Navlink