import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Morty from '../pages/Morty'
import Rick from '../pages/Rick'
import Personajes from '../pages/Personajes'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/morty",
        element: <Morty />,
    },
    {
        path: "/rick",
        element: <Rick />,
    },
    {
        path: "/personajes",
        element: <Personajes />,
    },
   
]);