import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certifications from './components/Certifications'
import Accomplishments from './components/Accomplishments'

export default function App() {
  const [page, setPage] = useState('about')

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <>
          <Hero />
          <Resume />
        </>
      case 'projects':
        return <Projects />
      case 'certifications':
        return <Certifications />
      case 'accomplishments':
        return <Accomplishments />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="col-span-1">
          <Sidebar />
        </aside>
        <main className="col-span-1 lg:col-span-3 space-y-8">
          <nav className="bg-gray-800 rounded-2xl p-3 flex flex-wrap gap-3">
            {[
              ['About','about'],
              ['Projects','projects'],
              ['Certifications','certifications'],
              ['Accomplishments','accomplishments']
            ].map(([label,key]) => (
              <button
                key={key}
                onClick={() => setPage(key)}
                className={`px-3 py-2 rounded-md text-sm transition duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 ${page===key? 'bg-yellow-500 text-gray-900':'text-gray-300 hover:bg-gray-700'}`}>
                {label}
              </button>
            ))}
          </nav>

          {renderPage()}
        </main>
      </div>
    </div>
  )
}
