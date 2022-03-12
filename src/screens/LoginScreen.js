import React from 'react'
import Header from '../components/header'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const LoginScreen = () => {
  return (
    <div>
      <Header />
      <div className="py-4 px-16">
        <div style={{ border: '2.5px  solid green' }}>
          <div class="navbar bg-base-100">
            <div class="flex-1 pl-4">
              <a class=" normal-case text-xl">H&H PRE-Inspection</a>
            </div>
            <div class="flex-none">
              <div class="avatar pr-4">
                <div class="w-16 rounded-full p-2 ring ring-green-900 ring-offset-base-100 ring-offset-2">
                  <img src={logo} class="mr-3 h-16" alt="Flowbite Logo"></img>
                </div>
              </div>
            </div>
          </div>

          <div
            className="py-2 "
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div class="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
              <div class="card-body">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"></input>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"></input>
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div class="form-control mt-6">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <Link to="/dashboard">Login</Link>
                    {/* <a href="/dashboard">Login</a> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar bg-base-100">
            <div class="flex-1 pl-4">
              <a class=" normal-case text-xl"></a>
            </div>
            <div class="flex-none">
              <div class="avatar pr-4">
                <a class=" normal-case ">H&H Energy/Copyright 2022</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
