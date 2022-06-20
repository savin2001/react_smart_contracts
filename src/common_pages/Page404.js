import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="container mx-auto">
            <h1>404 Error</h1>
            <h1>404 Error</h1>
            <h1>404 Error</h1>
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
            <Link to={"/home" | ""}>
                <h2>Back to home page</h2>
            </Link>
        </div>
    );
};

export default Page404;
