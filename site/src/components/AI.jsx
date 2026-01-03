import React from 'react'

export default function AISection(){
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">AI & Hackathon</h2>
      <p className="text-sm text-gray-300">I recently led a team of 4 to win the OCI Compute Hackathon. We built a system that uses an LLM to understand operator natural-language queries about available capacity and then calls APIs to return actionable results.</p>
      <p className="text-sm text-gray-300 mt-3">Use case: an operator asks about available capacity for specific regions, shapes, and constraints; our system interprets the request, queries capacity metadata and telemetry, and returns suggested targets—saving time and improving customer experience.</p>
      <p className="text-xs text-gray-400 mt-3">Tech: LLM integration, Oracle Cloud APIs, Python, REST, automation</p>
    </div>
  )
}
