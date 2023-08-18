import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Pages
import InitialPage from "./Pages/InitialPage";
import NotFound from "./Pages/NotFound";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactsPage from "./Pages/ContactsPage";
import About from './Pages/About';



const router = createBrowserRouter([
  {
    path:"/",
    element:<About />,
    errorElement:<NotFound />
  },
  {
    path:"/contacts",
    element: <ContactsPage />,
    errorElement: <NotFound />
  },
  {
    path:"/projects",
    element: <ProjectsPage />,
    errorElement: <NotFound />
  },
  {
    path:"*",
    element:<NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
