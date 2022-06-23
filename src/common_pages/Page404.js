import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="container mx-auto pt-36">
            <div className="container mx-auto ">
                <h1>404 Error Page #2</h1>
                <p className="zoom-area">
                    <b>Oopsie!</b> seems you are a little lost.{" "}
                </p>
                <section className="error-container">
                    <span className="four">
                        <span className="screen-reader-text">4</span>
                    </span>
                    <span className="zero">
                        <span className="screen-reader-text">0</span>
                    </span>
                    <span className="four">
                        <span className="screen-reader-text">4</span>
                    </span>
                </section>
                <div className="link-container">
                    <Link to="/" className="more-link">
                        Get back to shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;
