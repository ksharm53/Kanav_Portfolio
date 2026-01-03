import React from 'react'

export default function Accomplishments(){
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Accomplishments</h2>

      <div className="space-y-4 text-sm text-gray-300">
        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-baseline justify-between">
            <h3 className="font-medium">Winner — OCI Compute Hackathon</h3>
            <span className="text-xs text-gray-400">Dec 2025</span>
          </div>
          <p className="mt-1 text-gray-300">Built a natural-language interface that understands operator queries (using Meta Llama), parses requested parameters, invokes OCI APIs to fetch available capacity, and returns actionable recommendations for right-sizing and placement.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Implemented an LLM-backed parser (Meta Llama) to translate free-text operator requests into structured API calls.</li>
            <li>Automated benchmark orchestration across OCI instances to validate capacity suggestions.</li>
            <li>Delivered a policy-driven suggestion engine and concise UI for operators to review recommendations.</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">OCI Compute</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Meta Llama</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Python</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Docker</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Terraform</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">OCI APIs</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-baseline justify-between">
            <h3 className="font-medium">Education</h3>
            <span className="text-xs text-gray-400">Dec 2023</span>
          </div>
          <p className="text-gray-300 mt-1">M.S., Computer Software Engineering — Arizona State University (with Honors) • GPA: 4.0</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">ASU</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">With Honors</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">GPA: 4.0</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex items-baseline justify-between">
            <h3 className="font-medium">Awards — Tata Consultancy Services</h3>
            <span className="text-xs text-gray-400">2015 — 2021</span>
          </div>
          <p className="text-gray-300 mt-1">Recognition across mentorship, on-the-spot initiative, and technical delivery while at TCS.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Best Mentor — recognized for mentorship and onboarding excellence.</li>
            <li>On-the-Spot Award — awarded for rapid problem resolution and initiative.</li>
            <li>Technical Excellence — Tata Consultancy Services (TCS) — acknowledged for technical leadership and delivery quality.</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Mentorship</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Rapid Response</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Technical Excellence</span>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <h3 className="font-medium">Personal interests</h3>
          <p className="text-gray-300 mt-1">Outside work I stay active and enjoy competitive sports. I represented Tata Consultancy Services (TCS) for three years in inter-corporate squash tournaments, demonstrating commitment and competitive play.</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Running — regularly train and participate in road races, including half-marathons and marathons.</li>
            <li>Squash — club player and inter-corporate competitor (represented TCS for 3 years).</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Running</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Squash</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">Road Races</span>
          </div>
        </div>
      </div>
    </div>
  )
}
