import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-6 mt-4'>
            <span className='flex gap-8' onClick={() => setOpen(!open)}>
                {
                    open
                        ? <X className='md:hidden'></X>
                        : <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-700
                    ${open ? "top-6" : "-top-40"}
                    `}>
                    {links}
                </ul>

                <h2>NavBar</h2>
            </span>

            <ul className='hidden md:flex gap-10'>
                {links}
            </ul>

            {/* <ul className='flex gap-10'>
                {
                    navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex gap-10 justify-center'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;