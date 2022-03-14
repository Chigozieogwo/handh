import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChartBar from '../components/ChartBar.js'

const CompanyProfileScreen = () => {
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
                <span class="ml-2 text-sm font-bold">H & H Pre-Inspection</span>
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

          {/* Balance Amount */}
          <div className="bg-gray-100  p-5">
            <div>
              <h1 className="text-2xl mb-4 p-4 bg-gradient-to-r from-green-400 to-green-700">
                Company Profile
              </h1>
            </div>{' '}
            {/* section amount transfers */}
            <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
            {/* <!-- Left Side --> */}
            <div class="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div class="bg-white p-3 border-t-4 border-green-400">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""></img>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">J Global Limited</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">The Best  Company Inc.</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Nov 07, 2016</span>
                        </li>
                    </ul>
                </div>
                {/* <!-- End of profile card --> */}
                <div class="my-4"></div>
                
            </div>
            {/* <!-- Right Side --> */}
            <div class="w-full md:w-9/12 mx-2 h-64">
                {/* <!-- Profile tab -->

{/* <!-- Experience and education --> */}
               <div class="grid grid-cols-1 pb-3 md:grid-cols-2 lg:grid-cols-2 px-5 xl:p-0 gap-4 xl:gap-6">
             
             <div class="bg-white p-6 rounded-xl border border-gray-50">
               <div class="flex justify-between items-start">
                 <div class="flex flex-col">
                   <p class="text-xs text-gray-600 tracking-wide">
                     Passed Certificate
                   </p>
                   <h3 class="mt-1 text-lg text-indigo-500 font-bold">130</h3>
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
                   <h3 class="mt-1 text-lg text-indigo-500 font-bold">10</h3>
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
               
{/* <!-- End of profile tab --> */}

<div class="my-4"></div>

                {/* <!-- About Section -->  */}
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Company Details</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Name</div>
                                <div class="px-4 py-2">J Global Limited</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Registration NO.</div>
                                <div class="px-4 py-2">00123</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">RC Number</div>
                                <div class="px-4 py-2">ETB/WE/266</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">+11 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Founded</div>
                                <div class="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                        Full Information</button>
                </div>
                {/* <!-- End of about section --> */}
                <div class="my-4"></div>
                {/* <!-- About Section -->  */}
                <div class=" bg-white mt-4 p-6 rounded-xl border border-gray-50 ">
              <div className="py-2 ">
                <div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                    List Of Inspected Certificate
                  </h2>
                  <a
                    href="#"
                    class="px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold hover:bg-blue-300">
                    More
                  </a>
                </div>

                <div className="py-4">
                  
                  <div class="flex flex-col">
                    <div class="overflow-x-auto shadow-md sm:rounded-lg">
                      <div class="inline-block min-w-full align-middle">
                        <div class="overflow-hidden ">
                          <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                              <tr>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Certificate Name
                                </th>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Reg No
                                </th>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Date Registered
                                </th>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Action
                                </th>
                                {/* <th scope="col" class="p-4">
                                  <span class="sr-only">Action</span>
                                </th> */}
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Ethanol Certifcation
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  ET/3902
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                                    Failed
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                  
                                  {/* <label
                for="my-modal-4"
                  type="button"
                  class="btn modal-button text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-3.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  Add New Company
                </label> */}

                <label for="my-modal-4"
                  type="button" class="relative btn modal-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </label>
                                </td>
                              </tr>

                              <input type="checkbox" id="my-modal-4" class="modal-toggle"></input>
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    
<div class=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
<a href="#">
<img class="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image"></img>
</a>
<div class="px-5 pb-5">
<a href="#">
<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Ethanol Certification</h5>
</a>

<div class="flex justify-between items-center">
<span class="text-3xl font-bold text-gray-900 dark:text-white"></span>
<a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Download</a>
</div>
</div>
</div>

  </label>
</label>


                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Alcohol Certifcation
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  AH/4636
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                    Passed
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <label for="my-modal-4"
                  type="button" class="relative btn modal-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </label>
                                </td>
                              </tr>
                              
                              
                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Ethanol Certifcation
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  ET/3902
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                                    Failed
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <label for="my-modal-4"
                  type="button" class="relative btn modal-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </label>
                                </td>
                              </tr>
                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Fuel
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  FL/4636
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                    Passed
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <label for="my-modal-4"
                  type="button" class="relative btn modal-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </label>
                                </td>
                              </tr>
                              
                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Ethanol Certifcation
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  ET/3902
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                                    Failed
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <label for="my-modal-4"
                  type="button" class="relative btn modal-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </label>
                                </td>
                              </tr>

                             
                           
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide"></h2>
                  <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span class="sr-only">Previous</span>
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                          <span class="sr-only">Next</span>
                          <svg
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
           
           
                {/* <!-- End of about section --> */}

                

                
            </div>
        
        </div>
    
    
    
    
          </div>
        
        
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
                <span class="ml-2 text-sm font-bold">H & H Pre-Inspection</span>
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
                    to="/reports">
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
                    <span class="ml-2 text-sm font-medium">Reports</span>
                  </Link>
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
                    <span class="ml-2 text-sm font-medium">Notifications</span>
                    <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
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

export default CompanyProfileScreen
