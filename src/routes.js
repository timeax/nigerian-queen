import Home from "./layouts/home";
import { BiFingerprint } from 'react-icons/bi';
import Vote from "./layouts/vote";
import About from "./layouts/about";
import ContactUs from "./layouts/contact";
const routes = [
    {
        name: 'Home',
        key: 'home',
        route: '/',
        component: <Home />
    },

    {
        name: 'About Us',
        key: 'about',
        route: '/about',
        component: <About />
    },

    {
        name: 'Contestants',
        key: 'contestants',
        route: '/contestants',
        component: <Home />
    },
    {
        name: 'Contact',
        key: 'contact',
        route: '/contact',
        component: <ContactUs />
    },
    {
        name: 'Live records',
        key: 'live_records',
        route: '/live_records',
        component: <Home />
    },
    {
        name: 'Login',
        key: 'login',
        route: '/login',
        component: <Home />
    },
    // {
    //     name: '',
    //     key: 'cart',
    //     route: '/cart',
    //     icon: <BiCart fontSize={24} />,
    //     component: <Home />
    // },
    {
        name: 'Vote',
        key: 'vote',
        icon: <BiFingerprint fontSize={24} />,
        route: '/vote',
        component: <Vote />,
        styleClass: 'btnLink'
    },
    // {
    //     name: 'Buy Tickets',
    //     key: 'tickets',
    //     route: '/buy-tickets',
    //     component: <Home />,
    //     style: { border: '1px solid #ddd' },
    //     icon: <BiCaretRight />
    // }
]

export default routes;