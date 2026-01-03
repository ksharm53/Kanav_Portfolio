import React from 'react'

export default function Certifications(){
  const certs = [
    { title: 'AWS Certified Solutions Architect – Associate', img: '/assets/images/solution_architect.jpeg', url: 'https://www.credly.com/badges/077c3b73-6d94-4b08-b18f-f37e16961c32/public_url' },
    { title: 'AWS Certified Developer – Associate', img: '/assets/images/developer_associate.jpeg', url: 'https://www.credly.com/badges/c2e22118-8ef9-4168-b3b3-951d701f2fc2/public_url' },
    { title: 'Predix Certified Developer', img: '/assets/images/predix.png', url: 'https://www.predix.com/' }
  ]

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Certifications</h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {certs.map((c, i) => (
          <li key={i} className="flex items-center gap-4 bg-gray-700 p-3 rounded-md">
            <img src={c.img} alt={c.title} className="w-14 h-10 object-contain rounded-md bg-gray-800 p-1" loading="lazy" />
            <div>
              <a href={c.url} className="font-semibold text-gray-100" target="_blank" rel="noopener noreferrer">{c.title}</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
