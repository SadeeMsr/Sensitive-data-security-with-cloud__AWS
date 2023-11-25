import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login";
import LogBook from "../Pages/LogBook/LogBook";
import YourSubmission from "../Pages/YourSubmission/YourSubmission";
import TranieeSub from "../Pages/TranieeSub/TranieeSub";
import SupList from "../Pages/SupList/SupList";


   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Login></Login>
        },
        {

            path: '/logbook',
            element: <LogBook></LogBook>

        },
        {
            path:'/yoursubmisson',
            element: <YourSubmission></YourSubmission>
        },
        {
            path:'/tranieeSub',
            element: <TranieeSub></TranieeSub>
        },
        {
            path: '/supList',
            element: <SupList></SupList>
        }
      ]
    },
  ]);  