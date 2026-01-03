import React from 'react'

const projects = [
  // Oracle projects first
  {
    id: 1,
    title: 'OCI Rack Decommissioning Automation',
    desc: 'End-to-end automation for identifying decommission candidates, orchestrating live migrations, and decommissioning racks at scale.',
    img: '/assets/images/oracle.png'
  },
  {
    id: 2,
    title: 'SmartNIC Upgrade Automation',
    desc: 'Automated SmartNIC upgrade campaigns across OCI hosts with region/AD/shape filtering and maintenance window management.',
    img: '/assets/images/oracle.png'
  },
  {
    id: 3,
    title: 'Capacity Estimator',
    desc: 'Tool to evaluate capacity for new VMs or bare-metal, enabling safe legacy shape decommissioning and migration planning.',
    img: '/assets/images/oracle.png'
  },

  // Amazon
  {
    id: 4,
    title: 'Cross Locale Normalization',
    desc: 'Normalization pipeline for locale-specific attributes; Java, AWS, microservices.',
    img: '/assets/images/amazon.png'
  },

  // Yahoo
  {
    id: 5,
    title: 'AMI Sharing Monitor',
    desc: 'AMI monitoring and Slack alerts; Python, AWS, CI.',
    img: '/assets/images/yahoo.png'
  },

  // ASU / academic projects
  {
    id: 6,
    title: 'LYNK Programming Language',
    desc: 'Language implementation (tokenizer & compiler) using Python, ANTLR, and Prolog-based parsing.',
    img: '/assets/images/asu.png'
  },
  {
    id: 7,
    title: 'Agile Metrics Microservices',
    desc: 'Separate microservices for agile metrics deployed in Docker containers; Java, Spring Boot, MySQL.',
    img: '/assets/images/asu.png'
  },
  {
    id: 8,
    title: 'Image Recognition Pipeline',
    desc: 'Video frame extraction and face recognition with AWS integration for classroom attendance logging.',
    img: '/assets/images/asu.png'
  },

  // TCS / GE
  {
    id: 9,
    title: 'FieldTime (GE)',
    desc: 'Timesheet & integration services; Java, Spring Boot, microservices.',
    img: '/assets/images/tcs.png'
  }
]

export default function Projects(){
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(p => (
        <article key={p.id} className="bg-gray-800 rounded-2xl p-4 shadow overflow-hidden transform transition duration-150 hover:-translate-y-1 hover:shadow-xl">
          <img src={p.img} alt={p.title} className="w-full h-28 object-contain rounded-xl mb-3 bg-gray-900 p-2" loading="lazy" />
          <h4 className="font-semibold">{p.title}</h4>
          <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
        </article>
      ))}
    </div>
  )
}
