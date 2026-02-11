export const techIcons = [
  {
    name: 'JavaScript (ES6+)',
    key: 'js',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M13.5 16.5c0 1.5.9 2.1 2.1 2.1.9 0 1.5-.3 1.8-.9m-7.8.9c-.9 0-1.5-.6-1.5-1.5V12h1.5v4.5c0 .3.3.6.6.6s.9-.3.9-.9V12h1.5v4.5c0 1.5-.9 2.1-2.1 2.1z" stroke="#000" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    name: 'React',
    key: 'react',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#61DAFB">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    )
  },
  {
    name: 'Next.js',
    key: 'nextjs',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000" />
        <path d="M9 9h6v6l-6-6z" fill="#fff" />
        <path d="M15 9v6h-1l-5-5v5H8V9h1l5 5V9h1z" fill="#fff" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    key: 'nodejs',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2l7 3.9v7.8l-7 3.9-7-3.9V7.9l7-3.9z" />
      </svg>
    )
  },
  {
    name: 'Spring Boot',
    key: 'spring',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.732 2.209-.426 4.684-1.427 6.039-3.572.359-.568.334-1.19.334-1.19s.095 1.103-.045 1.75c-.886 4.096-4.704 6.951-8.815 8.444" fill="#6DB33F" />
      </svg>
    )
  },
  {
    name: 'SQL',
    key: 'sql',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" fill="#00758F" stroke="#00758F" strokeWidth="1" />
        <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" fill="none" stroke="#00758F" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#00758F" strokeWidth="1" />
      </svg>
    )
  },
  {
    name: 'TailwindCSS',
    key: 'tailwind',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06B6D4" />
      </svg>
    )
  },
  {
    name: 'Vite',
    key: 'vite',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <defs>
          <linearGradient id="viteGrad" x1="6" y1="3" x2="18" y2="21">
            <stop offset="0%" stopColor="#41D1FF" />
            <stop offset="100%" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
        <path d="M20.5 3.5L12 20l-8.5-16.5L12 6l8.5-2.5z" fill="url(#viteGrad)" />
        <path d="M12 6l-3 8 3 6 3-6-3-8z" fill="#FFCC00" opacity="0.8" />
      </svg>
    )
  }
];

export const projects = [
  {
    name: 'PlayGround',
    description: 'A modern, responsive React-based collection of interactive party games perfect for gatherings, date nights, and social events.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://playground-alpha-three.vercel.app',
    img: 'https://private-user-images.githubusercontent.com/139267544/547936242-1d157d79-c586-4592-a501-5eea35dce098.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3NTgyMTcsIm5iZiI6MTc3MDc1NzkxNywicGF0aCI6Ii8xMzkyNjc1NDQvNTQ3OTM2MjQyLTFkMTU3ZDc5LWM1ODYtNDU5Mi1hNTAxLTVlZWEzNWRjZTA5OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQyMTExNTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ODgzOGY5YmVhMDliMGJiNTQzNGIyN2Q2ZmRhYzcyYTMwODNmM2QyYzZiZDhiZTgwMDFlOTQ4N2ZjZTdlZDI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.tDeH-EsOkM9HFbcKD9adYTtLSWK3bGh9ciDrWqENksA'
  },
  {
    name: 'Libreto',
    description: 'A notes app built with Next.js, Node.js, and Tailwind CSS, designed for simplicity and speed to help you capture ideas and stay organized.',
    technologies: ['Node.js', 'React', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/Mattojjo/libreto',
    img: 'https://private-user-images.githubusercontent.com/139267544/547934323-e129f74c-9962-472a-8e2a-3306c630e27a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA3NTgwNDksIm5iZiI6MTc3MDc1Nzc0OSwicGF0aCI6Ii8xMzkyNjc1NDQvNTQ3OTM0MzIzLWUxMjlmNzRjLTk5NjItNDcyYS04ZTJhLTMzMDZjNjMwZTI3YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIxMFQyMTA5MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZjdhNGM0MGY1NjhhMTk1YTg3ZDAxMDUyOWNmYTkwYzJmNTgyMTVlYjJiYzZhYzk1YTM2M2M0MzE3OGY0NWZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Tv1O1b34yIEMZGiHWfe1HpkWdH54vnTKcthYZdYEa5c'
  }
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const softSkills = [
  'Team Management',
  'Customer Experience',
  'Operational Excellence',
  'Data-Driven Decision Making',
  'Cross-Functional Collaboration',
  'Problem Solving'
];

export const experiences = [
  {
    role: 'Software Engineer',
    company: 'The Home Depot',
    period: '2023 - Present',
    description: 'Contributing to enterprise digital teams, building React and Next.js applications, integrating APIs with Node.js and SQL.',
    highlights: [
      'Migrated headless CMS to Contentful',
      'Built AI-powered customer assistance tools',
      'Improved content infrastructure for large-scale platforms'
    ],
    color: 'orange'
  },
  {
    role: 'Customer Experience Manager',
    company: 'The Home Depot',
    period: '2020 - 2023',
    description: 'Led daily store operations with responsibility for customer satisfaction, associate performance, and operational execution.',
    highlights: [
      'Primary escalation point for customers and associates',
      'Improved customer experience scores',
      'Developed strong business acumen and analytics skills'
    ],
    color: 'orange'
  },
  {
    role: 'Department Manager',
    company: 'The Home Depot',
    period: '2017 - 2020',
    description: 'Managed teams across multiple departments including Lumber, Garden, Receiving, and Customer Service.',
    highlights: [
      'Oversaw staffing and performance management',
      'Analyzed metrics to drive improvements',
      'Supported cross-department initiatives'
    ],
    color: 'orange'
  }
];
