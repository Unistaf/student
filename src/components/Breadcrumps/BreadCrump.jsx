import React from "react";
import useRouteMatch, { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const match = useRouteMatch();

    const getPathSegments = () => {
        return location.pathname.split("/").filter((segment) => segment !== "");
    };

    const generateBreadcrumbItems = () => {
        const pathSegments = getPathSegments();

        return pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

            // Customize the label as per your requirements
            const label = segment;

            return {
                path,
                label,
            };
        });
    };

    const breadcrumbItems = generateBreadcrumbItems();

    return (
        <nav>
            <ul className="breadcrumb">
                {breadcrumbItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === breadcrumbItems.length - 1 ? "active" : ""}
                    >
                        {index === breadcrumbItems.length - 1 ? (
                            <span>{item.label}</span>
                        ) : (
                            <Link to={`${match.url}${item.path}`}>{item.label}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
