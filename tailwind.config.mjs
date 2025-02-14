import { fontFamily } from 'tailwindcss/defaultTheme';


/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
        'sm': '375px',    
        'md': '425px',    
        'lg': '768px',   
        'xl': '1024px',   
        '2xl': '1440px',  
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        jeju: ["Jeju Myeongjo", "serif"], 
        roboto: ["var(--font-roboto)"],
        roadRage: ["var(--font-road-rage)"],
        alatsi: ["var(--font-alatsi)"]
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
