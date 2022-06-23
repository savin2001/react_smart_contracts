/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    AiOutlineShoppingCart,
    AiOutlineMenu,
    AiOutlineClose,
    AiOutlineBell,
    AiOutlineSearch,
} from "react-icons/ai";

import ThemeToggle from "./ThemeToggle";

const navigation = [
    { name: "Products", href: "/product-overview", current: true },
    { name: "Features", href: "/smart-contracts", current: false },
    { name: "Company", href: "/about", current: false },
    { name: "FAQs", href: "/help", current: false },
    { name: "Contacts", href: "/contact", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Disclosure
            as="nav"
            className="bg-white dark:bg-primary fixed top-0 left-0 z-30 w-full shadow-md py-1"
        >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <AiOutlineClose
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <AiOutlineMenu
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start xs:opacity-0 sm:opacity-0 md:opacity-100 ">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link
                                        to="/"
                                        className="flex  h-8 w-auto pr-4 hover:opacity-60 duration-100"
                                    >
                                        <img
                                            src="https://avatars.dicebear.com/api/identicon/your-custd.svg"
                                            alt="Logo"
                                            className="bg-white"
                                        />
                                    </Link>
                                    <Link
                                        to="/"
                                        className="hover:text-primary dark:hover:opacity-60 duration-100"
                                    >
                                        <h2 className="text-black flex dark:text-white text-2xl font-bold">
                                            <span>Iko</span>
                                            <span className="text-primary dark:text-black">
                                                Legit
                                            </span>
                                        </h2>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-primary border dark:border-white  text-white dark:text-white"
                                                        : "text-black dark:text-white hover:text-primary",
                                                    "px-3 py-2 rounded-xl text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* xs:top-32 sm:top-32 md:top-32  */}
                            <div className="absolute inset-y-0   right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-auto sm:pr-0">
                                <div className=" flex  dark:bg-white mx-2 rounded-full text-black dark:text-white hover:text-primary ">
                                    <span className="sr-only">View cart</span>

                                    <AiOutlineSearch
                                        className="h-6 w-6 absolute top-5 ml-2"
                                        aria-hidden="true"
                                    />
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-200 dark:bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white-500"
                                        placeholder="I'm looking for..."
                                        // required=""
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="bg-gray-300 dark:bg-black p-3 mx-1 rounded-full text-black dark:text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span className="sr-only">View cart</span>
                                    <AiOutlineShoppingCart
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                                <button
                                    type="button"
                                    className="bg-gray-300 dark:bg-black p-3 mx-1 rounded-full text-black dark:text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <AiOutlineBell className="h-6 w-6" />
                                </button>

                                <button
                                    type="button"
                                    className="bg-gray-300 dark:bg-black p-3 mx-1 rounded-full text-black dark:text-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <ThemeToggle className="h-6 w-6" />
                                </button>
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://avatars.dicebear.com/api/adventurer/john.svg"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white text-white dark:bg-gray-700 dark:text-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/login"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                                                        )}
                                                    >
                                                        Sign in
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/register"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                                                        )}
                                                    >
                                                        Sign up
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            {/* <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/login"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                                                        )}
                                                    >
                                                        Login
                                                    </Link>
                                                )}
                                            </Menu.Item> */}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
