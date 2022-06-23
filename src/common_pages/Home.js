import React from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 2,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 3,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 4,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 5,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 6,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 7,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    {
        id: 8,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35.69",
        color: "Black",
    },
    // More products...
];
const Home = () => {
    return (
        <div className="container mx-auto mt-12">
            <header
                id="landing-page"
                className="dark:bg-black bg-fixed max-w-xl  pt-32 h-screen"
            >
                <div className="sm:text-center lg:text-left pr-6">
                    <h1 className="text-4xl text-left tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Empowering</span>{" "}
                        <span className="block text-primary xl:inline">
                            safe and secure
                        </span>{" "}
                        <span className="block xl:inline">Ecommerce</span>
                    </h1>
                    <p className="mt-3 m-4 text-base text-gray-500 dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        There has been a surge in fraudulent transactions,
                        especially in cross-border and online trading due to
                        poor enforcement laws and the anonymity of the
                        transacting parties. This is a concern that can be
                        mitigated will the implementation of smart contracts.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                            <Link
                                to="/home"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-primary hover:opacity-70 md:py-4 md:text-lg md:px-10"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <Link
                                to="/home"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-primary bg-indigo-100 hover:opacity-70 md:py-4 md:text-lg md:px-10"
                            >
                                Live demo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute right-0 lg:inset-y-0 lg:right-0 lg:w-1/2 max-w-full bg-white dark:bg-black ">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1648120637796-9bed5eb881fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt=""
                    />
                </div>
            </header>
            <main>
                <div className="bg-white dark:bg-black shadow-lg">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-primary">
                            Our popular products
                        </h2>

                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <Link to="/product-overview" key={product.id}>
                                    <div className="group relative">
                                        <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div className="mx-2 mb-4">
                                                <h3 className="text-gray-900 font-bold text-lg dark:text-white">
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-0"
                                                    />
                                                    {product.name}
                                                </h3>
                                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                    {product.color}
                                                </p>
                                            </div>
                                            <p className=" pb-2 font-medium text-lg text-primary dark:text-white">
                                                {product.price}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            className="bg-primary dark:bg-blue-600 py-2 px-4 mx-2 rounded-2xl text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white w-full"
                                        >
                                            <span className="">
                                                Add to cart
                                            </span>
                                        </button>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
