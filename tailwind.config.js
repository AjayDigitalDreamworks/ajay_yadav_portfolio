/** @type {import('tailwindcss').Config} */
import defaultPreset from 'tailwindcss/preset'

export default {
  presets: [defaultPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
