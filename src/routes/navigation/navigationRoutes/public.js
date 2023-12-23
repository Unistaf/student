/* eslint-disable react/react-in-jsx-scope */
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { DIPLOME_PATH, ECOLES_DETAILS_PATH, ECOLES_PATH, LOGIN_PATH, PUBLIC_PATH, REGISTER_PATH } from "../navigationPaths";
import WithoutAuth from "layouts/WithoutAuth";
import PublicHomePage from "pages/public/HomePage/PublicHomePage";
import EcolePage from "pages/public/Ecoles/EcolePage";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import DiplomePage from "pages/public/Diplomes/DiplomePage";
import EcoleDetailsPage from "pages/public/Ecoles/Details/EcoleDetailsPage";

/*
|---------------------------------------------------------------
| Les routes publics
|---------------------------------------------------------------
| Toute page qui ne necessite pas une authentification doit etre ici
|
*/
export const publicRoutes = [
    {
        path: PUBLIC_PATH,
        errorElement: <ErrorBoundary />,
        element: <WithoutAuth />,
        children: [
            {
                path: "",
                element: <>
                    <Header />
                    <div className="min-h-50">
                        <Outlet />
                    </div>
                    <Footer />
                </>,
                children: [
                    {
                        breadcrumb: "Acceuil",
                        path: "",
                        element: <PublicHomePage />,
                    },
                    {
                        path: ECOLES_PATH,
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <EcolePage />,
                            },
                            {
                                path: ECOLES_DETAILS_PATH,
                                element: <EcoleDetailsPage />
                            }
                        ]
                    },
                    {
                        breadcrumb: "Diplômes",
                        path: DIPLOME_PATH,
                        element: <DiplomePage />
                    }
                ]
            },
            {
                path: LOGIN_PATH,
                element: <p>Hello from login</p>,
            },
            {
                path: REGISTER_PATH,
                element: <p>Hello fromo register</p>
            }
        ]
    },
];