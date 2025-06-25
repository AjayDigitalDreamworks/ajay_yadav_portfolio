import defaultPreset from "tailwindcss/preset";

export default {
  presets: [defaultPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // No need for theme.extend or plugins here if you don't customize
};
