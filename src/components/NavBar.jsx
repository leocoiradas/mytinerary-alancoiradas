import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as Anchor } from "react-router-dom";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { user_logout } from "../store/actions/userAction";

function NavBar({ isOpen, user }) { 
    const dispatch = useDispatch()
    const handleLogout = async (event) => {
        try {
            dispatch(user_logout())
        } catch (error) {
            console.log(error)
        }
    }
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
            to: '/cities'
        },
        /*{
            title: user ? (<Anchor onClick={handleLogout} to={'/signin'} className=" bg-red-700 text-zinc-100  hover:bg-orange-500"><>{userIcon} <span className="ml-1">Logout</span></></Anchor>): (<>{userIcon} <span className="ml-1">Login</span></>),
            isUser: user ? false: true,
            to: '/signin'
        }*/
    ]

    return (
        <nav className={`${isOpen ? 'block text-center' : 'hidden'} md:flex md:items-center md:w-auto`}>
            <ul className={`flex flex-col md:flex-row md:gap-4  ${isOpen ? 'block gap-2 md:flex' : 'hidden'} md:flex w-full`}>
                {links.map((link) => (<li key={link.title}><Anchor className={`p-1.5 rounded-lg text-lg md:p-3 md:text-base hover:bg-blue-500 hover:text-white  ${link.isUser ? 'bg-blue-700 text-zinc-100  hover:bg-violet-500' : ' '}`} to={link.to}>{link.title}</Anchor></li>))}
                {user ? <li><Anchor onClick={handleLogout} to='/signin' className=" bg-red-700 text-zinc-100  hover:bg-orange-500 p-1.5 rounded-lg text-lg md:p-3 md:text-base">{userIcon} Sign Out</Anchor></li> 
                : 
                <li><Anchor to='/signin' className="bg-blue-700 text-zinc-100  hover:bg-violet-500 p-1.5 rounded-lg text-lg md:p-3 md:text-base">{userIcon} Sign In</Anchor></li>}
            </ul>
        </nav>
    );
};
export default NavBar