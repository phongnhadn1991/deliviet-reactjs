import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-900">
            <div className="sidebar-header flex items-center justify-center py-4">
                <div className="inline-flex">
                    <a href="http://" className="inline-flex flex-row items-center">
                        <svg className="w-10 h-10 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase">Deliviet</span>
                    </a>
                </div>
            </div>
            <div className="sidebar-content px-4 py-6">
                <ul className="flex flex-col w-full">
                    <li className="my-px">
                        <NavLink to={'/'} className={({ isActive }) => {
                            const activeClass = isActive ? 'bg-gray-100 text-gray-700' : ''
                            return `flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 ${activeClass}`
                        }
                        }>
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </span>
                            <span className="ml-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="my-px">
                        <span className="flex font-medium text-md text-yellow-500 px-4 my-4 uppercase">Posts</span>
                    </li>
                    <li className="my-px">
                        <NavLink to={'/posts'} end className={({ isActive }) => {
                            const activeClass = isActive ? 'bg-gray-100 text-gray-700' : ''
                            return `flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 ${activeClass}`
                        }
                        }>
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </span>
                            <span className="ml-3">List Posts</span>
                        </NavLink>
                    </li>
                    <li className="my-px">
                        <NavLink to={'/posts/category'} className={({ isActive }) => {
                            const activeClass = isActive ? 'bg-gray-100 text-gray-700' : ''
                            return `flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 ${activeClass}`
                        }
                        }>
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                            <span className="ml-3">Category</span>
                        </NavLink>
                    </li>
                    <li className="my-px">
                        <span className="flex font-medium text-md text-yellow-500 px-4 my-4 uppercase">Products</span>
                    </li>
                    <li className="my-px">
                        <a href="http://" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </span>
                            <span className="ml-3">List product</span>
                        </a>
                    </li>
                    <li className="my-px">
                        <a href="http://" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </span>
                            <span className="ml-3">Taxonomy</span>
                        </a>
                    </li>
                    <li className="my-px">
                        <span className="flex font-medium text-md text-yellow-500 px-4 my-4 uppercase">Accounts</span>
                    </li>
                    <li className="my-px">
                        <a href="http://" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300">
                            <span className="flex items-center justify-center text-lg text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            <span className="ml-3">List Users</span>
                            <span className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto">10</span>
                        </a>
                    </li>
                    <li className="my-px">
                        <a href="http://" className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300">
                            <span className="flex items-center justify-center text-lg text-red-400">
                                <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <span className="ml-3">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
