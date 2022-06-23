// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./common_pages/Home";
import Login from "./common_pages/Login";
import Page404 from "./common_pages/Page404";
import ProductOverview from "./common_pages/ProductOverview";
import Register from "./common_pages/Register";
import PrimaryNavbar from "./components/PrimaryNavbar";

function App() {
    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [hasError, setHasError] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);
    //         setHasError(false);
    //         try {
    //             const res = await fetch(
    //                 "https://hn.algolia.com/api/v1/search?query=react"
    //             );
    //             const json = await res.json();
    //             setData(json.hits);
    //         } catch (error) {
    //             setHasError(true);
    //         }
    //         setIsLoading(false);
    //     };
    //     fetchData();
    // }, [setData]);

    return (
        <div className="App">
            <BrowserRouter>
                <div className="dark:bg-black min-h-screen">
                    <PrimaryNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<Page404 />} />
                        <Route path="/product-overview" element={<ProductOverview />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
