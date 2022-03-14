import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const ReportScreen = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [display, setIsdiplay] = useState(false);

    const isDiplayed =()=>{
        setIsdiplay(true)
    }
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
                Search Reports
              </h1>
            </div>{' '}
            {/* section amount transfers */}
            {/* mmmm */}
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div class="mt-10 mb-10 grid grid-cols-1 pb-3 md:grid-cols-3 lg:grid-cols-3 px-5 xl:p-0 gap-4 xl:gap-6">
             
             
             <div class=" mt-8">
               
             <select class="select select-success w-full max-w-xs">
  <option disabled selected>Search Report</option>
  <option>Audit Report/Operation Activities</option>
  <option>Financial Audit of Exports</option>
  <option>Oil Product Pricing Options/Price Quotes</option>
  <option>Notification Alerts</option>
  <option>Invoice Reports/Payment History Reports</option>
  <option>Other Reports</option>
  
</select>


            



             </div>
                        
            
<div>
<span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Start</span>

<DatePicker className="select-success w-full max-w-xs p-4 mt-1" selected={startDate} onChange={(date) => setStartDate(date)} />
</div>
<div>
<span class="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">End</span>
<DatePicker className="select-success w-full max-w-xs p-4 mt-1" selected={startDate2} onChange={(date) => setStartDate2(date)} />
<div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                   
                  </h2>
                 <div className="mt-4 ">
                 <button onClick={isDiplayed} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
                
                 </div>
                </div>

</div>

             
             
             
             
           </div>

            </div>
             <div className="mt-10"> </div>    
           
           

          
            {display ? (<div class=" bg-white mt-4 p-6 rounded-xl border border-gray-50 ">
              <div className="py-2 ">
                <div class="flex justify-between items-center">
                  <h2 class="text-sm text-gray-600 font-bold tracking-wide">
                    List Of Reports
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
                                  Report Name
                                </th>
                                <th
                                  scope="col"
                                  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Report No. 
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
                                 Audit Report
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  01124
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  06/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                    Pending
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                  <Link to="">
                                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </button></Link>
                                </td>
                              </tr>

                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Financial Report
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  01934
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  05/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                  Issued
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <Link to="">
                                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </button></Link>
                                </td>
                              </tr>

                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Price Quote
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  02924
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  04/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                                    Pending
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <Link to="">
                                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </button></Link>
                                </td>
                              </tr>

                              <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Audit Report
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                  AU/WD/67
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  03/03/2022
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                                    Issued
                                  </span>
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                <Link to="">
                                  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      view
                                    </span>
                                  </button></Link>
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
           
           ): null}
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

export default ReportScreen
