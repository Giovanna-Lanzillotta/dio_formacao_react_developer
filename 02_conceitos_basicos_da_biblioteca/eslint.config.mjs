import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { 
      js,
      react: pluginReact,
      prettier: eslintPluginPrettier // Adicionamos o plugin para o ESLint entender o Prettier
    }, 
    languageOptions: { 
      globals: {
      ...globals.browser,
      ...globals.es2021 // Isso ativa o "es2021
      }
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error" // Faz o ESLint apontar erros de formatação como erro de código
    } 
  },
  pluginReact.configs.flat.recommended, // Isso ativa o "plugin:react/recommended"
  eslintConfigPrettier // SEMPRE por último para evitar conflitos de regras
]);