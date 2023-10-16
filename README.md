# Origin

Originally [a question from Reddit: How to test a component that disappears after some time?](https://web.archive.org/web/https://old.reddit.com/r/reactjs/comments/178yp5x/how_to_test_a_component_disappears_after_some_time/)

TLDR: We want to test for an element that disappears after a duration

# Live demo

- [StackBlitz](https://stackblitz.com/github/EdmondChuiHW/jest-test-disappearing-toast?file=src%2Fcomponents%2FToast.test.tsx) (broken on Safari)
- [CodeSandbox](https://codesandbox.io/p/sandbox/github/EdmondChuiHW/jest-test-disappearing-toast/tree/main?file=%2Fsrc%2Fcomponents%2FToast.test.tsx%3A1%2C1)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
