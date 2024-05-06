import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AddCountry from "../pages/Admin/AddCountry/AddCountry";
import Countries from "../pages/Admin/Countries/Countries";
import ClientCountries from "../pages/Client/Countries/";
import Admin from "../pages/Admin/Admin";
import Client from "../pages/Client/Client";
import Home from "../pages/Client/Home";
import About from "../pages/Client/About";
import Contact from "../pages/Client/Contact";
import NotFound from "../pages/NotFound";

export const ROUTES = [
    //Admin Layout
    {
        path: '/admin',
        element: <Admin/>,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: 'add-category',
                element: <AddCountry/>
            },
            {
                path: 'countries',
                element: <Countries/>
            }
        ]
    },
    //User Layout
    {
        path: '',
        element: <Client/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'clientcountries',
                element: <ClientCountries/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
];