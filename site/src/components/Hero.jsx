import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 shadow-lg" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-3xl font-bold mb-2">About me</h2>
      <p className="text-gray-200 leading-relaxed">
        I'm a cloud-native backend engineer at Oracle with an M.S. in Computer Software Engineering from ASU. I design and deliver scalable services and automation for compute and data platforms, specializing in Java and Python. I enjoy turning complex distributed systems into reliable, observable, and cost-efficient products — recently focused on capacity optimization, automation, and pragmatic ML for operational insights.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">Oracle — Software Developer II</span>
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">Java &amp; Python</span>
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">OCI &amp; AWS</span>
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">Capacity Optimization</span>
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">LLM-driven Tooling</span>
        <span className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-sm">Distributed Systems</span>
      </div>

      <div className="mt-4">
        <a href="mailto:ksharm53@asu.edu" className="inline-block text-sm text-yellow-400 hover:text-yellow-300">Say hello — ksharm53@asu.edu</a>
      </div>
    </section>
  )
}
