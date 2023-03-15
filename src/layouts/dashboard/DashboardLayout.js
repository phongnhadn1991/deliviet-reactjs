import React from 'react'
import { Outlet } from 'react-router'
import Header from '../header'
import Footer from '../footer'
import HeaderTop from '../headerTop'

export default function DashboardLayout() {
    return (
        <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100 text-gray-800">
            <Header />
            <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
                <HeaderTop />
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}
