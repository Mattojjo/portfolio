export const techIcons = [
  {
    name: 'JavaScript (ES6+)',
    key: 'js',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
        <path d="M13.5 16.5c0 1.5.9 2.1 2.1 2.1.9 0 1.5-.3 1.8-.9m-7.8.9c-.9 0-1.5-.6-1.5-1.5V12h1.5v4.5c0 .3.3.6.6.6s.9-.3.9-.9V12h1.5v4.5c0 1.5-.9 2.1-2.1 2.1z" stroke="#000" strokeWidth="1.2"/>
      </svg>
    )
  },
  {
    name: 'React',
    key: 'react',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#61DAFB">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    )
  },
  {
    name: 'Next.js',
    key: 'nextjs',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000"/>
        <path d="M9 9h6v6l-6-6z" fill="#fff"/>
        <path d="M15 9v6h-1l-5-5v5H8V9h1l5 5V9h1z" fill="#fff"/>
      </svg>
    )
  },
  {
    name: 'Node.js',
    key: 'nodejs',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="#339933">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2l7 3.9v7.8l-7 3.9-7-3.9V7.9l7-3.9z"/>
      </svg>
    )
  },
  {
    name: 'Spring Boot',
    key: 'spring',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M20.205 16.392c-2.469 3.289-7.741 2.179-11.122 2.338 0 0-.599.034-1.201.133 0 0 .228-.097.519-.198 2.374-.821 3.496-.986 4.939-1.727 2.71-1.388 5.408-4.413 5.957-7.555-1.032 3.022-4.17 5.623-7.027 6.679-1.955.722-5.492 1.424-5.493 1.424l-.143-.076c-2.405-1.17-2.475-6.38 1.894-8.059 1.916-.736 3.747-.332 5.818-.732 2.209-.426 4.684-1.427 6.039-3.572.359-.568.334-1.19.334-1.19s.095 1.103-.045 1.75c-.886 4.096-4.704 6.951-8.815 8.444" fill="#6DB33F"/>
      </svg>
    )
  },
  {
    name: 'SQL',
    key: 'sql',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="8" ry="3" fill="#00758F" stroke="#00758F" strokeWidth="1"/>
        <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" fill="none" stroke="#00758F" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#00758F" strokeWidth="1"/>
      </svg>
    )
  },
  {
    name: 'TailwindCSS',
    key: 'tailwind',
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" fill="#06B6D4"/>
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
            <stop offset="0%" stopColor="#41D1FF"/>
            <stop offset="100%" stopColor="#BD34FE"/>
          </linearGradient>
        </defs>
        <path d="M20.5 3.5L12 20l-8.5-16.5L12 6l8.5-2.5z" fill="url(#viteGrad)"/>
        <path d="M12 6l-3 8 3 6 3-6-3-8z" fill="#FFCC00" opacity="0.8"/>
      </svg>
    )
  }
];
