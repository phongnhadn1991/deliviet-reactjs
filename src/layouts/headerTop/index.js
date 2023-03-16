import React from 'react'

// const profileUser = localStorage.getItem("profile_user") ? JSON.parse(localStorage.getItem("profile_user")) : '';

export default function HeaderTop() {
    return (
        <header className="header bg-white shadow py-4 px-8">
            <div className="header-content flex items-center flex-row">
                <form action="#">
                    <div className="hidden md:flex relative">
                        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input id="search" type="text" name="search" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400" placeholder="Search..." />
                    </div>
                    <div className="flex md:hidden">
                        <a href="http://" className="flex items-center justify-center h-10 w-10 border-transparent">
                            <svg className="h-6 w-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                    </div>
                </form>
                {/* <div className="flex ml-auto">
                    <a href="http://" className="flex flex-row items-center">
                        <img src={profileUser ? profileUser.avatar_urls[48] : ''} alt="" className="h-10 w-10 bg-gray-200 border rounded-full" />
                        <span className="flex flex-col ml-2">
                            <span className="truncate w-20 font-semibold tracking-wide">{profileUser ? profileUser.name : ''}</span>
                            <span className="truncate w-20 text-gray-500 text-xs mt-1">Admin</span>
                        </span>
                    </a>
                </div> */}
            </div>
        </header>
    )
}
