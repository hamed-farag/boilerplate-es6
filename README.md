# Simple boilerplate es6

> boilerplate-es6 is a simple project for testing your ES6 skill.
> You can use gulp or webpack for building your code.

## Install

```sh
## Clone the repo
$ git clone https://github.com/hamed-farag/boilerplate-es6.git

## Install all dependencies
$ npm install

## If you want to work with webpack, don't forget to install it globally.
$ npm install webpack -g
```

## Basic concept

* JavaScript ES6
* ES6 Transpiler
  - [babel](https://babeljs.io/)
* Build system
  - [gulp](http://gulpjs.com/)
  - [webpack](https://webpack.js.org/)

## Script Tasks

### build

> Build the code using gulp from `./src`, store in `./dist`

```sh
$ npm run gulp
or
$ npm run webpack
```

### watch

> Build the code at every change you made it  without run build command again

```sh
$ npm run gulp:watch
or
$ npm run webpack:watch
```
## License

Released under the MIT license.
