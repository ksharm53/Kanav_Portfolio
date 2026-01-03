import React from 'react'

export default function Sidebar() {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg" role="complementary" aria-label="Sidebar">
      <div className="flex flex-col items-center text-center">
        <img src="/assets/images/mypic.png" alt="Kanav Sharma" className="w-28 h-28 rounded-full object-cover mb-4 transition-transform transform hover:scale-105 ring-2 ring-yellow-500/30" loading="lazy" />
        <h1 className="text-xl font-semibold">Kanav Sharma</h1>
        <p className="text-sm text-gray-300">Software Developer II @ Oracle — M.S., ASU '23 · Ex-Amazon / Yahoo / TCS · Java &amp; Python · AWS Certified Solutions Architect &amp; Developer</p>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-400 uppercase">Links</h3>
        <div className="mt-3 flex flex-col gap-2">
          <a href="https://github.com/ksharm53" className="text-yellow-400 hover:text-yellow-300">GitHub</a>
          <a href="https://www.linkedin.com/in/kanavsharma18/" className="text-yellow-400 hover:text-yellow-300">LinkedIn</a>
          <a href="/resume.pdf" download className="text-yellow-400 hover:text-yellow-300">Resume</a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm text-gray-400 uppercase">Contact</h3>
        <div className="mt-3 space-y-2 text-sm">
          <div className="p-2 bg-gray-700 rounded-md">
            <div className="text-gray-300 text-xs">Email</div>
            <a href="mailto:ksharm53@asu.edu" className="text-yellow-400">ksharm53@asu.edu</a>
          </div>
          <div className="p-2 bg-gray-700 rounded-md">
            <div className="text-gray-300 text-xs">Phone</div>
            <a href="tel:+12133522795" className="text-yellow-400">+1 (602) 481-7051</a>
          </div>
          <div className="p-2 bg-gray-700 rounded-md">
            <div className="text-gray-300 text-xs">Location</div>
            <div className="text-gray-100">Austin, Texas, USA</div>
          </div>
        </div>
      </div>

    </div>
  )
}
