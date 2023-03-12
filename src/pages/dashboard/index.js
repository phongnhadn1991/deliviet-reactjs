import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

export default function Dashboard() {
  return (
    <div className="main-content flex flex-col flex-grow p-8">
      <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>
      <div className="flex flex-col flex-grow bg-white mt-4 p-8">
        <div className='main_content'>
          <div className='c-list_groupIcon'>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex justify-center">
                <div
                  className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <NavLink to={'/posts'}>
                    <img
                      className="rounded-t-lg"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/190.jpg"
                      alt="" />
                  </NavLink>
                  <div className="p-6">
                    <h5
                      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Posts
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <NavLink to={'/'}>
                    <img
                      className="rounded-t-lg"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/192.jpg"
                      alt="" />
                  </NavLink>
                  <div className="p-6">
                    <h5
                      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Products
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                  <NavLink to={'/'}>
                    <img
                      className="rounded-t-lg"
                      src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                      alt="" />
                  </NavLink>
                  <div className="p-6">
                    <h5
                      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Accounts
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
