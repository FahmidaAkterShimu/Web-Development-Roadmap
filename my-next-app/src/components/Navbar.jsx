'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathName = usePathname()

    const links = <>
        <li><Link className={pathName === '/' ? 'text-green-400' : ''} href="/">Home</Link></li>
        <li><Link className={pathName === '/about' ? 'text-green-400' : ''} href="/about">About</Link></li>
        <li><Link className={pathName === '/contact' ? 'text-green-400' : ''} href="/contact">Contact</Link></li>
        <li><Link className={pathName === '/about/developers' ? 'text-green-400' : ''} href="/about/developers">Developers</Link></li>
        <li><Link className={pathName === '/blogs' ? 'text-green-400' : ''} href="/blogs">Blogs</Link></li>
        <li><Link className={pathName === '/dashboard' ? 'text-green-400' : ''} href="/dashboard">Dashboard</Link></li>
        <li><Link className={pathName === '/users' ? 'text-green-400' : ''} href="/users">Users</Link></li>
    </>
    return (
        <div className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md">
            <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
            <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search" className="input input-bordered w-64 lg:w-auto" />
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;