import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AppointmentPage from "../Pages/AppointmentPage/AppointmentPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <AppointmentPage></AppointmentPage>
            }
        ]
    }
])

export default router;