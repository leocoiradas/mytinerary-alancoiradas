import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as Anchor } from "react-router-dom";
import { faUser } from '@fortawesome/free-solid-svg-icons';
function NavBar({ isOpen }) {
    const userIcon = <FontAwesomeIcon icon={faUser} />;
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
            title: (<>{userIcon} <span className="ml-1">Login</span></>),
            isUser: true,
            to: '*'
        }
    ]

    return (
        <nav className={`${isOpen ? 'block text-center' : 'hidden'} md:flex md:items-center md:w-auto`}>
            <ul className={`flex flex-col md:flex-row md:gap-4  ${isOpen ? 'block gap-2 md:flex' : 'hidden'} md:flex w-full`}>
                {links.map((link) => (<li key={link.title}><Anchor className={`p-1.5 rounded-lg text-lg md:p-3 md:text-base hover:bg-blue-500  ${link.isUser ? ' bg-blue-700 text-zinc-100  hover:bg-violet-500' : ''}`} to={link.to}>{link.title}</Anchor></li>))}
            </ul>
        </nav>
    );
};
export default NavBar