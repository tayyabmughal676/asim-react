import React from 'react'
import ReactDOM from 'react-dom/client'
import SplashPage from './App.tsx'
import {WelcomePage} from "./page/welcome_page.tsx";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HomePage} from "./page/home_page.tsx";
import {VerificationPage} from "./components/verification_component.tsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <SplashPage/>,
    },
    {
        path: "/welcome",
        element: <WelcomePage/>
    },
    {
        path: "/verification",
        element: <VerificationPage/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
