import React from 'react';
import Link from './Link';
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
    return (
        <nav>

            <ul className='flex gap-10'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
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
        </nav>
    );
};

export default NavBar;