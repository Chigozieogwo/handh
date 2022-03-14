import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div>
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
              <Link className="py-0.5" to="/">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Login
  </span>
</button>

              </Link>
           
              
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

      {/* <div class="navbar bg-green-900">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-white text-xl">
            H & H Inspection
          </a>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control">
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0">
                <li className="text-white">
                  <a>About Us</a>
                </li>
                <li className="text-white" tabindex="0">
                  <a>
                    Inspection
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24">
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2 bg-base-100">
                    <li className="text-white">
                      <a className="text-gray-700">Inspection</a>
                    </li>
                    <li>
                      <a className="text-gray-700">Companies</a>
                    </li>
                  </ul>
                </li>
                <li className="text-white">
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791"></img>
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     */}
    </div>
  )
}

export default header
