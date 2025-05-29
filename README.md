# ⚛️ React + TypeScript + Vite Boilerplate

A modern and scalable boilerplate for building high-performance React applications using **Vite**, **TypeScript**, **MUI**, **Redux Toolkit**, **React Query**, **Formik**, **Framer Motion**, and **Yup**. Built with best practices for state management, animations, form handling, and API integration.

---

## 🚀 Features

- ⚡️ **Vite** – Ultra-fast dev server and build tool
- 🧠 **TypeScript** – Static typing for safer development
- 🎨 **MUI v7** – Material Design UI components
- 🎯 **Redux Toolkit** – Predictable and efficient state management
- 🔄 **React Query** – Powerful data fetching and caching
- 📦 **Axios** – Simplified HTTP requests
- ✅ **Formik + Yup** – Robust form management and validation
- 🎞️ **Framer Motion** – Modern animation library
- 📊 **NProgress** – Elegant loading indicators
- 🔥 **React Hot Toast** – Beautiful toast notifications
- 🧪 **ESLint + Type Checking** – Quality and maintainability

---

## 🧱 Tech Stack

| Technology    | Version         |
| ------------- | --------------- |
| React         | ^19.1.0         |
| Vite          | ^6.3.5          |
| TypeScript    | ~5.8.3          |
| MUI           | ^7.1.0          |
| Redux Toolkit | ^2.8.2          |
| React Query   | ^5.77.1         |
| Framer Motion | ^12.12.2        |
| Formik + Yup  | ^2.4.6 / ^1.6.1 |
| Sass          | ^1.89.0         |

---

## 📁 Folder Structure

```

├── public/
├── src/
│ ├── assets/ # Static files (images, fonts)
  ├── api/ # API calls via Axios or other clients
│ ├── components/ # Shared reusable components
│ ├── constents/ # App-wide constants and Redux slices or feature modules
│ ├── context/ # React Context providers and consumers
│ ├── hooks/ # Custom React hooks
│ ├── layouts/ # Layout components (wrappers for pages)
│ ├── pages/  # Route-level page components
│ ├── routes/ # React Router route definitions
│ ├── store/ # Redux store setup and slices
  ├── styles/ # Global or modular styles (CSS/SCSS)
  ├── theme/ # MUI theme configuration
  ├── types/ # TypeScript types and interfaces
  ├── utils/ # Utility functions and helpers
  ├── validations/ # Form validation schemas (e.g. Yup)
│ ├── App.tsx # Root component
│ └── main.tsx # App entry point
├── .eslintrc.js
├── .env.example
├── index.html
├── tsconfig.node.json
├── tsconfig.app.json
├── tsconfig.json
├── vite.config.ts
└── package.json

```

---

## 🛠️ Installation

```bash
git clone https://github.com/MuddusarZulfiqar/react-boilerplate.git
cd react-boilerplate
npm install
```

---

## 🚧 Development

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

---

## 🏗️ Build

```bash
npm run build
```

Builds the app for production in the `dist/` folder.

---

## 🔍 Preview Production Build

```bash
npm run preview
```

---

## 🔬 Linting & Type Checking

```bash
npm run lint        # Lint the code
npm run type-check  # TypeScript type checking
```

---

## 📦 ESLint Configuration (Advanced)

To enable type-aware linting, update `eslint.config.js`:

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // or stricter
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install React-specific ESLint plugins:

```bash
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

And configure:

```ts
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 📚 License

This project is licensed under the **MIT License**.

---

## 🧑‍💻 Author

**Muddusar Zulfiqar**
[LinkedIn](https://www.linkedin.com/in/muddusar-zulfiqar/)
