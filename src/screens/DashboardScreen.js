import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChartBar from '../components/ChartBar.js'

const DashboardScreen = () => {
  return (
    <div>
      <div class="drawer h-5/6   drawer-mobile w-full">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle"></input>
        <div class="drawer-content flex flex-col">
          {/* Navbar */}
          <div class="w-full navbar text-indigo-300 bg-green-900">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <a
                class="flex items-center md:hidden w-full px-3 text-white mb-1"
                href="#">
                <svg
                  class="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span class="ml-2 text-sm font-bold">H & H Inspection</span>
              </a>
            </div>
            <div class="flex-none  lg:block">
              <ul class="menu menu-horizontal">
                <li>
                  <button class="text-white rounded hover:bg-indigo-700  focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Home
                  </button>
                </li>
                <li>
                  <button class="text-white rounded hover:bg-indigo-700  focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button class="text-white rounded hover:bg-indigo-700  focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Register
                  </button>
                </li>
                <div class="dropdown dropdown-end px-4 mr-4">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10  rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=33791"></img>
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="mt-3 p-2 shadow menu menu-compact text-gray-700 dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                      <a class="justify-between">Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>

          {/* Balance Amount */}
          <div className="bg-gray-100  p-5">
            <div>
              <h1 className="text-2xl mb-4 p-4 bg-gradient-to-r from-green-400 to-green-700">
                Dashboard
              </h1>
            </div>{' '}
            {/* section amount transfers */}
            <div class="grid grid-cols-1 pb-3 md:grid-cols-2 lg:grid-cols-5 px-5 xl:p-0 gap-4 xl:gap-6">
              <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col">
                    <p class="text-xs text-gray-600 tracking-wide">Companies</p>
                    <h3 class="mt-1 text-lg text-blue-500 font-bold"> 1800</h3>
                    <span class="mt-4 text-xs text-gray-500">
                      Total Companies Registered
                    </span>
                  </div>
                  <div class="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col">
                    <p class="text-xs text-gray-600 tracking-wide">
                      Oil Per Day
                    </p>
                    <h3 class="mt-1 text-lg text-green-500 font-bold">320</h3>
                    <span class="mt-4 text-xs text-gray-500">
                      Total Volume of Oil inspected per day
                    </span>
                  </div>
                  <div class="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col">
                    <p class="text-xs text-gray-600 tracking-wide">
                      Oil Per Week
                    </p>
                    <h3 class="mt-1 text-lg text-yellow-500 font-bold">950</h3>
                    <span class="mt-4 text-xs text-gray-600">
                      Total Oil Inspected in a week
                    </span>
                  </div>
                  <div class="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col">
                    <p class="text-xs text-gray-600 tracking-wide">
                      Passed Certificate
                    </p>
                    <h3 class="mt-1 text-lg text-indigo-500 font-bold">1850</h3>
                    <span class="mt-4 text-xs text-gray-500">
                      Total passed certificate
                    </span>
                  </div>
                  <div class="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="bg-white p-6 rounded-xl border border-gray-50">
                <div class="flex justify-between items-start">
                  <div class="flex flex-col">
                    <p class="text-xs text-gray-600 tracking-wide">
                      Failed Certificate
                    </p>
                    <h3 class="mt-1 text-lg text-indigo-500 font-bold">1850</h3>
                    <span class="mt-4 text-xs text-gray-500">
                      Total Failed certificate
                    </span>
                  </div>
                  <div class="bg-red-500 p-2 md:p-1 xl:p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* end section amount transfers */}
            <div class="grid grid-cols-1 md:grid-cols-5 items-start px-4 xl:p-0 gap-y-4 md:gap-6">
              <div class="col-start-1 col-end-5">
                <h2 class="text-xs md:text-sm text-gray-800 font-bold tracking-wide"></h2>
              </div>
              <div class="col-span-3 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div className="py-2 ">
                  <div class="flex justify-between items-center">
                    <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                      Total Vol of Oil inspected in a day
                    </h2>
                    <a
                      href="#"
                      class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                      More
                    </a>
                  </div>
                  <div className="py-4">
                    <div>
                      <ChartBar title="" aspect={2 / 1} />{' '}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-span-2 bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                    Latest Transactions
                  </h2>
                  <a
                    href="#"
                    class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                    More
                  </a>
                </div>
                <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>
                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>

                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>
                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>
                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>

                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>
                  <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                    <p class="px-4 font-semibold">Today</p>
                    <p class="px-4 text-gray-600">McDonald</p>
                    <p class="px-4 tracking-wider">Cash</p>
                    <p class="px-4 text-blue-600">Food</p>
                    <p class="md:text-base text-gray-800 flex items-center gap-2">
                      16.90
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            {/* mmmm */}
            {/* mmmm */}
          </div>
        </div>

        {/* Drawer sidebar */}
        <div class="drawer-side  ">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu  overflow-y-auto w-40  bg-base-100">
            <div class="flex flex-col  items-center w-40 h-full overflow-hidden text-indigo-300 bg-green-900 ">
              <a class="flex items-center w-full px-3 mt-3" href="#">
                {/* <svg
                  class="w-8 h-8 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg> */}
                <span class="ml-2 text-sm font-bold">H & H Inspection</span>
              </a>
              <div class="w-full px-2">
                <div class="flex flex-col items-center w-full mt-3 ">
                  <Link
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    to="/dashboard">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Dasboard</span>
                  </Link>
                  <Link
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    to="/list">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Company</span>
                  </Link>
                  <Link
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    to="/user">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Users Profile</span>
                  </Link>
                  <a
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Inbox</span>
                  </a>
                  {/* <a class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700" href="#">
       <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
       </svg>
       <span class="ml-2 text-sm font-medium">Docs</span>
     </a> */}

                  <a
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Documents</span>
                  </a>
                </div>
                <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                  <a
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Products</span>
                  </a>
                  <a
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Address</span>
                  </a>
                  <a
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Settings</span>
                  </a>
                  <a
                    class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                    href="#">
                    <svg
                      class="w-6 h-6 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium">Messages</span>
                    <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                  </a>
                </div>
              </div>
              {/* <a
                class="flex items-center justify-center w-full h-16 mt-auto bg-green-800 hover:bg-green-700"
                href="#">
                <svg
                  class="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium">Account</span>
              </a>
            */}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen
