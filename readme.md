# TRAINING KEEPER!

my training keeper

# how tos

# eslint

npm install -D eslint
npx eslint --init

file: .eslintrc.json
{
"env": {
"browser": true,
"commonjs": true,
"es2021": true,
"node": true
},
"extends": [
"airbnb-base",
"prettier"
],
"plugins": [
"prettier"
],
"parserOptions": {
"ecmaVersion": 12
},
"rules": {}
}

# prettier

npm install -D prettier eslint-config-prettier eslint-plugin-prettier

install prettier extension

from settings, choose ‘Prettier - Code formatter’ as default formatter

create a file name “.prettierrc” and enter the following:
.prettierrc
{
"printWidth": 100,
"singleQuote": true
}

# babel

npm install -D @babel/core @babel/preset-env babel-loader @babel/node

To make babel know what rules it should follow in compiling JS:
Make a file called “.babelrc”
{
"presets": ["@babel/presets-env"]
}

To start using babel

> babel-node ./src
> or
> nodemon --exec babel-node ./src

To also make it work with “jest”:

> npm install -D babel-jest @babel/polyfill
> Add a file on the root of src directory called “jest-setup.js”
> import "core-js/stable";
> import "regenerator-runtime/runtime";

From the “package.json” file add a property “jest”:
"jest": {
"setupFiles": [
"./src/jest-setup.js"
]
}

# webpack

later
