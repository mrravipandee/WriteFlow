module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',                // Base JS rules
    'plugin:react/recommended',          // React-specific linting
    'next/core-web-vitals',              // Next.js best practices
    'plugin:prettier/recommended'        // Enables eslint-plugin-prettier and shows formatting issues as errors
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',   // Not needed in Next.js
    'prettier/prettier': 'error'         // Prettier issues shown as ESLint errors
  },
  settings: {
    react: {
      version: 'detect',                 // Automatically detects the React version
    },
  },
};
