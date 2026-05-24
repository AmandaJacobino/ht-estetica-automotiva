/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange:       'var(--orange)',
        'orange-2':   'var(--orange-2)',
        'orange-deep':'var(--orange-deep)',
        'bg-0':       'var(--bg-0)',
        'bg-1':       'var(--bg-1)',
        'bg-2':       'var(--bg-2)',
        'bg-3':       'var(--bg-3)',
        fg:           'var(--fg)',
        'fg-dim':     'var(--fg-dim)',
        'fg-mute':    'var(--fg-mute)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        teko:  ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
