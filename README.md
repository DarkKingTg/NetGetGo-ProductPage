# NetJetGo Product Page

Last updated: March 12, 2026

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

REACT INSTALLATION — STEP BY STEP GUIDE

1. Install Node.js
------------------------------------------------
Download Node.js (LTS version)

https://nodejs.org

After installing, verify in terminal:

node -v
npm -v

You should see version numbers.


2. Create a React Project (Using Vite)
------------------------------------------------
Run in terminal:

npm create vite@latest

Answer the prompts:

Project name: my-react-app
Framework: React
Variant: JavaScript


3. Go into the Project Folder
------------------------------------------------
cd my-react-app


4. Install Dependencies
------------------------------------------------
npm install


5. Start the React Development Server
------------------------------------------------
npm run dev

Terminal will show something like:

VITE ready in 300ms
Local: http://localhost:5173/

Open that link in your browser.


6. React Project Structure
------------------------------------------------
my-react-app
│
├── node_modules
├── public
│
├── src
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── index.html


7. Edit the React Page
------------------------------------------------
Open file:

src/App.jsx

Example code:

function App() {
  return (
    <h1>Hello React 🚀</h1>
  )
}

export default App


8. Install Common React Libraries (Optional)
------------------------------------------------

React Router
npm install react-router-dom

Axios
npm install axios

Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


9. Build Project for Production
------------------------------------------------
npm run build

Production files will be generated inside:

dist/


Quick Installation Commands
------------------------------------------------
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev