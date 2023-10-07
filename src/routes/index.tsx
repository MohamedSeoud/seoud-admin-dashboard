import { useRoutes } from "react-router-dom";
import Layout from "../component/mainLayout/Layout";
import Dashboard from "../pages/Dashboard";
import Team from "../pages/Team";
import Contacts from "../pages/Contacts";
import Invoices from "../pages/Invoices";

export default function Routes() {

    const index = useRoutes([
        {
            path:'/',
            element:<Layout/>,
            children:[
            {
                path:'/',
                element:<Dashboard/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/contacts',
                element:<Contacts/>
            },
            {
                path:'/invoices',
                element:<Invoices/>
            }
        ]
        }

    ])
    return index
}

