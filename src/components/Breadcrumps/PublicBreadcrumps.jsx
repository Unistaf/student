import AppMaxWidth from "components/AppMaxWidth/AppMaxWidth";
import React from "react"
import { useMatches } from "react-router-dom";

const PublicBreadcrumps = () => {
    const matches = useMatches();
    const crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));
    console.log({ crumbs });

    return (
        <div className="h-50 bg-blue">
            <AppMaxWidth>
                tetste
                <ol className="flex gap-9">
                    {crumbs.map((crumb, index) => (
                        <li key={index}>{crumb}</li>
                    ))}
                </ol>
            </AppMaxWidth>
        </div>
    );
}

export default PublicBreadcrumps