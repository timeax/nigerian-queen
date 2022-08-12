import logo from './../../assets/img/logo.png';
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import { IconButton } from '@mui/material';
import { BiMenu } from 'react-icons/bi';
import { useRef, useState } from 'react';
const Header = ({ routes }) => {
    const [show, setShow] = useState(false);
    const ref = useRef(0)
    const setVisibility = () => {
        setShow(!show);
        document.body.style.overflow = show ? 'hidden' : null;
    }

    window.addEventListener('wheel', e => {
        const header = ref.current;
        const app = document.querySelector('.App');
        try {
            if (app.scrollTop >= 72) header.style.top = '-75px';
            else header.style.top = null;
            if (app.scrollTop >= 100) {
                header.classList.add('sticky');
                header.style.width = app.scrollWidth + 'px';
            } else { header.classList.remove('sticky'); header.style.width = null }
        } catch (error) { }
    });

    return (
        <header ref={ref}>
            <div className="container">
                <div className="d-flex align-items-center">
                    <IconButton onClick={setVisibility} className="text-light menu-toggler"><BiMenu /></IconButton>
                    <Link className='m-auto' to='/'>
                        <img src={logo} className='app-logo' alt="" />
                    </Link>
                    <Navbar routes={routes} show={show} func={setShow} />
                </div>
            </div>
        </header>
    )
}

export default Header;