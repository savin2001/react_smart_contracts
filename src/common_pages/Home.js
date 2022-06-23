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
    // More products...
];
const Home = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{' '}
                <span className="block text-indigo-600 xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
            <header className="shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-primar">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                    </div>
                </div>

                <div className="">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-primary">
                            Customers also purchased
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
