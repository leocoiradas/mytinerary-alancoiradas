import React from "react";
import { Link as Anchor } from "react-router-dom";
function NavBar({ isOpen }) {
    const links = [
        {
            title: 'Home',
            isUser: false,
            to: '/'
        },
        {
            title: 'Cities',
            isUser: false,
            to: '*'
        },
        {
            title: 'User',
            isUser: true,
            to: '*'
        }
    ]

    return (
        <nav className={`${isOpen ? 'block text-center' : 'hidden'} md:flex md:items-center md:w-auto`}>
            <ul className={`flex flex-col md:flex-row md:gap-4  ${isOpen ? 'block gap-2 md:flex' : 'hidden'} md:flex w-full`}>
                {links.map((link) => (<li key={link.title}><Anchor className={`text-gray-50 ${link.user ? 'bg-cyan-500' : ''}`} to={link.to}>{link.title}</Anchor></li>))}
            </ul>
        </nav>
    );
};
export default NavBar