import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "text-main": "rgba(39, 36, 125, 0.52)",
        profile:"linear-gradient(90deg, rgba(115, 115, 115, 0.4) 18.5%, rgba(115, 115, 115, 0.4) 65.5%)",
        secondary:"#F3EFEF",
        "secondary-600":"#EFEEEC",
        "background-2":' rgba(255, 255, 255, 0.82) 53%',
        "background-3":' rgba(153, 153, 153, 0.38) 100%',
        "background-4":'rgba(115, 115, 115, 0.4) 65.5%',
        "background-5":'rgba(115, 115, 115, 0.4)18.5%',

           },
      boxShadow: {
        'custom': ' 0px 4px 4px rgba(0, 0, 0, 0.25);',
        'text-shadow': '2px 2px 5px 1px rgba(150, 149, 149, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;

/* Rectangle 14 */

 
 
/* Rectangle 3 */

 

 

 




