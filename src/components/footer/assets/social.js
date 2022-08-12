import { BsWhatsapp, BsTwitter, BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs'

const medias = [
    {
        route: '/',
        icon: <BsWhatsapp />
    },

    {
        route: '/',
        icon: <BsTwitter />
    },

    {
        route: '/',
        icon: <BsInstagram />
    },

    {
        route: '/',
        icon: <BsLinkedin />
    },
    {
        route: '/',
        icon: <BsFacebook />
    },
];

const quickLinks = {
    about: [
        {
            name: 'About us',
            route: "/about"
        },
        {
            name: 'contact us',
            route: '/contact'
        },

        {
            name: 'Privacy policy',
            route: '/'
        },
        {
            name: 'Terms of service',
            route: '/'
        }
    ],

    hotLinks: [
        {
            name: 'Contestants',
            route: '/contestants'
        },
        {
            name: 'Vote',
            route: '/vote'
        },

        {
            name: 'Blogs',
            route: '/blogs'
        },
        {
            name: 'FAQs',
            route: '/'
        }
    ]
}

const obj = { medias: medias, quickLinks: quickLinks };

// eslint-disable-next-line import/no-anonymous-default-export
export default obj;