/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#13183F",
        gray: "#83869A",
        "gradient-start-a": "#F02AA6",
        "gradient-end-a": "#FF6F48",
        "gradient-start-b": "#4851FF",
        "gradient-end-b": "#F02AA6",
        "light-blue": "#F0F1FF",
        pink: "#F74780",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)"],
      },
      fontSize: {
        16: ["16px", "28px"],
        "16v2": ["16px", "26px"],
        18: ["18px", "28px"],
        24: ["24px", "32px"],
        "24v2": ["24px", "30px"],
        32: ["32px", "48px"],
        40: ["40px", "50px"],
        56:["56px","71px"]
      },
      height: {
        30: "120px",
        64.75:"259px",
        70.75: "283px",
        11.25:"46px",
        80.5:"322px",
        86.5:"346px",
      },
      width: {
        28.5:"114px",
        35: "140px",
        41.75: "167px",
        72.5:"286px",
        81.5:"326px",
        99.5:"438px",
        85.75:"343px",
        
        87.5:"350px",
        114.25:"457px",
        277.5:"1110px",
      },
      margin: {
        9.5: "38px",
        6.5: "26px",
        7.25:"29px",
        11.5: "46px",
        11.25:"45px",
        25:"100px",
        28.5:"114px",
        
        41.25:"165px",
        44.5:"178px",
        46.5:"186px",
        56.5:"226px",
        
      },
      borderRadius: {
        mid: "10px",
      },
      padding: {
        20: "80px",
        21.5:"86px",
        35:"140px",
        41.25:"165px",
      },
  
      spacing:{
        "pic-x":"400px",
        "pic-y":"-47.13px",
        "pic-x-dsk":"764px",
        "pic-y-dsk":"-126.13px",
        63.5:"254px",
     }, borderRadius: {
      dsk:"15px"
    }
    },
  },
  plugins: [],
};
