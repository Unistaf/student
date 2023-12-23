import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth";
import React from "react"
import { NavLink } from "react-router-dom";
import { publicRoutes } from "routes/navigation/navigationRoutes/public";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

const PublicBreadcrumps = () => {
    const breadcrumbs = useReactRouterBreadcrumbs(publicRoutes);

    return (
        <div className="h-50">
            <AppMaxWidth>
                <ul className="flex">
                    {
                        breadcrumbs.map(({ match, breadcrumb }, index) => (
                            <NavLink
                                // className="text-white font-semibold"
                                className={(index === breadcrumbs.length - 1 ? "text-white font-medium" : "text-white font-bold")}
                                key={match.pathname}
                                to={match.pathname}
                            >
                                {breadcrumb}
                                <span className="mx-2">{index === breadcrumbs.length - 1 ? "" : ">"}</span>
                            </NavLink>
                        ))
                    }
                </ul>
            </AppMaxWidth>
        </div>
    );
}

export default PublicBreadcrumps