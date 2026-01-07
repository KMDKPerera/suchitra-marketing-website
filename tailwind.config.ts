import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brandPurple: "#7B2FA1",
                brandBlue: "#1496D2",
                brandNavy: "#1F2A6B",
            },
        },
    },
    plugins: [],
};

export default config;
