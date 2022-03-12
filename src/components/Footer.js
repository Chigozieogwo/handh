import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div>
      {' '}
      <div style={{}} className="">
        <footer class="p-4 bg-green-900 text-white shadow md:px-6 md:py-8 dark:bg-gray-800">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com"
              class="flex items-center mb-4 sm:mb-0">
              <div class="avatar">
                <div class="w-8 rounded-full p-2 ring ring-white ring-offset-base-100 ring-offset-2">
                  <img src={logo} class="mr-3 h-8" alt="Flowbite Logo"></img>
                </div>
              </div>
              <span class="self-center text-2xl font-semibold ml-5 whitespace-nowrap dark:text-white">
                H & H Inspection
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
          <span class="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2022{' '}
            <a href="" class="hover:underline">
              H & H Inspection
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Footer
