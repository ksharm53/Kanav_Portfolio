import React from 'react'

export default function Resume(){
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg space-y-6" role="region" aria-label="Resume">
      <div>
        <h3 className="text-lg font-semibold">Kanav Sharma</h3>
        <p className="text-sm text-gray-300">Austin, TX • +1-602-481-7051 • <a href="mailto:ksharm53@asu.edu" className="text-yellow-400">ksharm53@asu.edu</a></p>
        <p className="text-sm text-gray-300 mt-1">
          <a href="https://github.com/ksharm53" className="text-yellow-400 hover:text-yellow-300 underline mr-3" target="_blank" rel="noopener noreferrer">github.com/ksharm53</a>
          <a href="https://www.linkedin.com/in/kanavsharma18/" className="text-yellow-400 hover:text-yellow-300 underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/kanavsharma18</a>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-md font-semibold">Education</h4>
          <p className="text-sm text-gray-300">Arizona State University</p>
          <p className="text-sm text-gray-400">M.S., Computer Software Engineering — Dec 2023 (with Honors) • GPA: 4.0</p>
        </div>
        <div>
          <h4 className="text-md font-semibold">Certifications</h4>
            <ul className="text-sm text-gray-300 list-inside list-disc">
              <li><a href="https://www.credly.com/badges/077c3b73-6d94-4b08-b18f-f37e16961c32/public_url" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">AWS Certified Solutions Architect – Associate</a></li>
              <li><a href="https://www.credly.com/badges/c2e22118-8ef9-4168-b3b3-951d701f2fc2/public_url" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">AWS Certified Developer – Associate</a></li>
              <li><a href="https://www.predix.com/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-400">Predix Certified Developer</a></li>
            </ul>
        </div>
      </div>

      <section>
        <h4 className="text-md font-semibold">Selected Experience</h4>
        <div className="mt-3 space-y-4 text-sm text-gray-300">
          <div>
            <div className="flex justify-between">
              <strong>Oracle — Member of Technical Staff</strong>
              <span className="text-gray-400">Mar 2024 — Present</span>
            </div>
            <ul className="list-inside list-disc mt-2">
              <li>Automated OCI datacenter rack decommissioning: identified candidates, assessed customer impact, and orchestrated live/reboot migrations to scale decommissioning operations.</li>
              <li>Led SmartNIC upgrade automation across hosts; implemented region/AD/shape filters, maintenance-window handling, and dynamic exclusion of critical customers.</li>
              <li>Designed and developed Capacity Estimator to plan VM/bare-metal allocation, evaluate legacy shape decommissioning, and drive upgrade campaigns.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">Tech: Oracle DB, Oracle Cloud, Java, Python, Google Guice, Microservices, JUnit, Mockito, SQL, CI/CD</p>
          </div>

          <div>
            <div className="flex justify-between">
              <strong>Amazon — Software Development Engineer</strong>
              <span className="text-gray-400">Aug 2023 — Nov 2023</span>
            </div>
            <ul className="list-inside list-disc mt-2">
              <li>Spearheaded cross-locale normalization for product attributes; reduced missed normalizations and improved data consistency for 2M+ product variants.</li>
              <li>Implemented high-throughput caching (48k req/sec) to reduce latency; delivered production-ready normalization workflow and documentation.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">Tech: Java, AWS (S3, DynamoDB, Athena), Microservices, NLP</p>
          </div>

          <div>
            <div className="flex justify-between">
              <strong>Yahoo! — Software Development Engineer</strong>
              <span className="text-gray-400">May 2023 — Aug 2023</span>
            </div>
            <ul className="list-inside list-disc mt-2">
              <li>Built AMI sharing monitor with Slack alerts; reduced detection and resolution time and minimized downtime risk.</li>
              <li>Improved test coverage and code quality with Pytest and Pylint; streamlined CI to accelerate deployments.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">Tech: Python, DynamoDB, AWS Lambda, SAM, Slack API</p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-md font-semibold">Other Experience</h4>
        <div className="mt-3 space-y-3 text-sm text-gray-300">
          <div>
            <div className="flex justify-between">
              <strong>ASU — Kids Camp Counsellor</strong>
              <span className="text-gray-400">May 2022 — Sep 2022</span>
            </div>
            <p className="mt-2">Organized activities, prioritized camper safety, and fostered a positive learning environment.</p>
          </div>

          <div>
            <div className="flex justify-between">
              <strong>TATA Consultancy Services — Software Development Engineer</strong>
              <span className="text-gray-400">Mar 2013 — Dec 2021</span>
            </div>
            <ul className="list-inside list-disc mt-2">
              <li>Developed outage-simulation and analytics tools for GE Power; improved maintenance scheduling and uptime.</li>
              <li>Delivered backend services for Saudi MOH appointment system and enterprise integrations.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-1">Tech: Java, Spring Boot, AWS, Microservices, Docker, PostgreSQL</p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="text-md font-semibold">Skills & Tools</h4>
        <p className="text-sm text-gray-300">Java, Python, Spring Boot, Microservices, Docker, Kubernetes, AWS, Oracle DB, SQL, Git, CI/CD, IntelliJ</p>
      </section>

      <section>
        <h4 className="text-md font-semibold">Leadership & Activities</h4>
        <p className="text-sm text-gray-300">ASU Kids Camp Counsellor; TCS Squash Team Captain (inter-corporate tournaments)</p>
      </section>

      <div className="pt-2">
        <a href="/resume.pdf" download className="inline-block text-yellow-400 hover:text-yellow-300 px-4 py-2 rounded-md font-semibold">Download Resume</a>
      </div>
    </div>
  )
}
