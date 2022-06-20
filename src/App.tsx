import React, { useState, useEffect } from "react";
import PrimaryNavbar from "./components/PrimaryNavbar";

function App() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const res = await fetch(
                    "https://hn.algolia.com/api/v1/search?query=react"
                );
                const json = await res.json();
                setData(json.hits);
            } catch (error) {
                setHasError(true);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [setData]);

    return (
        <div className="App">
            <div className="dark:bg-gray-900 min-h-screen">
                <PrimaryNavbar/>
            </div>
        </div>
    );
}

export default App;
