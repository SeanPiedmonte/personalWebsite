// All site content lives here, so updating the portfolio means editing this file only.

export const profile = {
  name: 'Sean Piedmonte',
  title: 'Software Engineer',
  tagline: 'I build fast, reliable systems — from HTTP libraries in C to pricing engines in C++.',
  email: 'seanpiedmonte@gmail.com',
  resumeUrl: '/resume.pdf', // drop a resume.pdf into /public to enable the download
  socials: [
    { label: 'GitHub', href: 'https://github.com/SeanPiedmonte' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sean-piedmonte-354533193/' },
    { label: 'Instagram', href: 'https://www.instagram.com/seanpiedy85/' },
  ],
}

export const about = [
  'I’m a software engineer with a B.S. in Software Engineering and a minor in Mathematics from Miami University. My path into programming started with Java in high school and grew into a love for systems work, web development and machine learning.',
  'These days I spend most of my time close to the metal — writing C, C++ and Rust — and exploring Go and Python for tooling and side projects. I care about clean interfaces, measurable performance and code that is easy for the next person to read.',
]

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Rust', 'Go', 'Python', 'Java', 'JavaScript'] },
  { group: 'Web', items: ['React', 'HTML & CSS', 'REST APIs', 'HTTP'] },
  { group: 'Tools', items: ['Git', 'Linux', 'Neovim', 'tmux', 'AWS'] },
]

export const experience = [
  {
    role: 'Solutions Architect Intern',
    org: 'Amazon Web Services',
    period: 'Internship',
    detail: 'Designed cloud architectures alongside AWS customers and solutions teams.',
  },
  {
    role: 'B.S. Software Engineering, Minor in Mathematics',
    org: 'Miami University',
    period: '2019 – 2023',
    detail: 'Co-founder and President of the Artificial Intelligence Society; Vice President of Alpha Chi Rho.',
  },
]

export const projects = [
  {
    name: 'Howler',
    description: 'An HTTP library written from scratch in C.',
    tags: ['C', 'Networking'],
    repo: 'https://github.com/SeanPiedmonte/Howler',
  },
  {
    name: 'Bond Pricing Tool',
    description: 'A fixed-income pricing engine for valuing bonds and computing yield and risk measures.',
    tags: ['C++', 'Finance'],
    repo: 'https://github.com/SeanPiedmonte/bond-pricing-tool',
  },
  {
    name: 'Hermes',
    description: 'A systems project in C.',
    tags: ['C', 'Systems'],
    repo: 'https://github.com/SeanPiedmonte/Hermes',
  },
  {
    name: 'Finance Site',
    description: 'A finance web application built to learn Go.',
    tags: ['Go', 'Web'],
    repo: 'https://github.com/SeanPiedmonte/financesite',
  },
  {
    name: 'College Football Manager',
    description: 'A college football management simulation.',
    tags: ['Python', 'Simulation'],
    repo: 'https://github.com/SeanPiedmonte/college-football-manager',
  },
  {
    name: 'Terminal Pong',
    description: 'Pong, playable right in your terminal.',
    tags: ['Rust', 'TUI'],
    repo: 'https://github.com/SeanPiedmonte/terminal-pong',
  },
]
