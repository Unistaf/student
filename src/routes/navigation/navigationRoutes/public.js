/* eslint-disable react/react-in-jsx-scope */
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { LOGIN_PATH, PUBLIC_PATH, REGISTER_PATH } from "../navigationPaths";
import WithoutAuth from "layouts/WithoutAuth";
import PublicHomePage from "pages/public/HomePage/PublicHomePage";

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
                element: <PublicHomePage />,
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