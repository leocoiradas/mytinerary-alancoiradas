import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Main from "../components/Main";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Restricted from "../components/Restricted";
import RedirectUser  from "./RedirectUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/cities/:id',
                element: <ProtectedRoute path='/restricted'>
                            <CityDetails />
                        </ProtectedRoute>
            },
            {
                path: '/signin',
                element: <RedirectUser path='/'>
                            <SignIn />
                        </RedirectUser>
                        
            },
            {
                path: '/signup',
                element: <RedirectUser path='/'>
                            <SignUp />
                        </RedirectUser>
            },
            {
                path: '/restricted',
                element: <Restricted />
            },
            {
                path: '*',
                element: <div className="flex justify-center items-center min-h-[80vh]"><h2 className="text-center text-2xl w-[75vw]">This page is under construction. Please come back later.</h2></div>
            }
        ]
    }
]);
export default router