import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Main from "../components/Main";
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
                path: '*',
                element: <div className="flex justify-center items-center min-h-[80vh]"><h2 className="text-center text-2xl w-[75vw]">This page is under construction. Please come back later.</h2></div>
            }
        ]
    }
]);
export default router