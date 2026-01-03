import React from 'react'

export default function Contact(){
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Contact</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-700 rounded-md">
          <h3 className="text-sm text-gray-300 font-semibold">Email</h3>
          <a href="mailto:ksharm53@asu.edu" className="text-yellow-400">ksharm53@asu.edu</a>
        </div>
        <div className="p-4 bg-gray-700 rounded-md">
          <h3 className="text-sm text-gray-300 font-semibold">Phone</h3>
          <a href="tel:+12133522795" className="text-yellow-400">+1 (602) 481-7051</a>
        </div>
        <div className="p-4 bg-gray-700 rounded-md sm:col-span-2">
          <h3 className="text-sm text-gray-300 font-semibold">Location</h3>
          <p className="text-gray-100">Austin, Texas, USA</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-md sm:col-span-2">
          <h3 className="text-sm text-gray-300 font-semibold">Links</h3>
          <div className="flex gap-3 mt-2">
            <a href="https://github.com/ksharm53" className="text-gray-100 hover:text-yellow-400">GitHub</a>
            <a href="https://www.linkedin.com/in/kanavsharma18/" className="text-gray-100 hover:text-yellow-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  )
}
