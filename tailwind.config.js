/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                cprimary: "var(--colorPrimary)",
                csecondary: "var(--colorSecondary)",
                clight: "var(--colorLight)",
                cdark: "var(--colorDark)",
            },
        },
    },
    plugins: [],
};
