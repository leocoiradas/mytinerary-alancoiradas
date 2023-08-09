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
                element: <h2>This page is under construction, please come back later.</h2>
            }
        ]
    }
]);
export default router