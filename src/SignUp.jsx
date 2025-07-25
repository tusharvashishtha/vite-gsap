import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SignUp = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100">
      <div ref={formRef} className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
