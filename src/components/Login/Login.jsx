import React, { useState } from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div
            className="bg-gray-800 p-10 rounded-lg shadow-2xl w-[30rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between mb-10">
              <button
                className={`w-full py-4 px-6 rounded-t-lg text-2xl ${
                  isLogin ? "bg-teal-600 text-white" : "bg-gray-700 text-gray-200"
                }`}
                onClick={() => {
                  setIsLogin(true);
                }}
              >
                Login
              </button>
              <button
                className={`w-full py-4 px-6 rounded-t-lg text-2xl ${
                  !isLogin ? "bg-teal-600 text-white" : "bg-gray-700 text-gray-200"
                }`}
                onClick={() => {
                  setIsLogin(false);
                }}
              >
                Register
              </button>
            </div>

            {isLogin ? (
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-gray-100">
                  Login Form
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <a href="#" className="text-lg text-teal-300 hover:underline">
                  Forgot Password?
                </a>
                <button className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition duration-300 text-2xl">
                  Login
                </button>
                <p className="text-lg text-gray-300">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setIsLogin(false);
                    }}
                    className="text-teal-300 hover:underline"
                  >
                    Register now
                  </a>
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-gray-100">
                  Register Form
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition duration-300 text-2xl">
                  Register
                </button>
                <p className="text-lg text-gray-300">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setIsLogin(true);
                    }}
                    className="text-teal-300 hover:underline"
                  >
                    Login here
                  </a>
                </p>
              </div>
            )}
          </div>
  )
}

export default Login