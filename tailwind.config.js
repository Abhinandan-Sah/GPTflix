/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'Login-backgroundImage': "url('https://res.cloudinary.com/dl4rdt9w0/image/upload/v1738764208/GptFlix/ln4aahcc9wuvp213zops.webp')",
        // 'Login-backgroundImage': "url('https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/1c38a990-f052-4780-b634-058296d274f9/NP-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_0f80906d-87a5-4c86-9cac-2f74a52f0b3d_small.jpg')",
        // 'browse-background': "url('b')"
      }
    },
  },
  plugins: [],
}

