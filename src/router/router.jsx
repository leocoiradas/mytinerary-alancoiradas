import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Main from "../components/Main";
import Cities from "../components/Cities";
import CityDetails from "../components/CityDetails";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ProtectedRoute from "./ProtectedRoute";

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
                element: <CityDetails />
            },
            {
                path: '/signin',
                element: <ProtectedRoute path='/'>
                            <SignIn />
                        </ProtectedRoute>
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '*',
                element: <div className="flex justify-center items-center min-h-[80vh]"><h2 className="text-center text-2xl w-[75vw]">This page is under construction. Please come back later.</h2></div>
            }
        ]
    }
]);
export default router