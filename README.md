# jest-playwright

## Setting environement up

```sh
npm create vite@latest

git init

npx eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · YAML
Checking peerDependencies of eslint-config-standard-with-typescript@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard-with-typescript@latest @typescript-eslint/eslint-plugin@^5.0.0 eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 typescript@*
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm

npm install --save-dev prettier

touch .eslintignore
touch .prettierrc
touch .prettierignore

npm install --save-dev eslint-config-prettier
```

```sh
npm install --save-dev jest ts-jest @types/jest
npm install --save-dev @testing-library/react
npm install --save-dev jest-environment-jsdom
npx ts-jest config:init

npm init playwright@latest -- --ct
```

```sh
npm install --save-dev babel-plugin-istanbul nyc
```

```sh
npm install @mantine/core @mantine/hooks @emotion/react
```

