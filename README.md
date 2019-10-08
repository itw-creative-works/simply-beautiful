<div align="center">
  <a href="https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-brandmark-black-x.svg">
    <img src="https://cdn.itwcreativeworks.com/assets/itw-creative-works/images/logo/itw-creative-works-brandmark-black-x.svg">
  </a>
  <br>
  <br>

![GitHub package.json version](https://img.shields.io/github/package-json/v/itw-creative-works/simply-beautiful.svg)

![David](https://img.shields.io/david/itw-creative-works/simply-beautiful.svg)
![David](https://img.shields.io/david/dev/itw-creative-works/simply-beautiful.svg) <!-- ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/itw-creative-works/simply-beautiful.svg) -->
![npm bundle size](https://img.shields.io/bundlephobia/min/simply-beautiful.svg)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability-percentage/itw-creative-works/simply-beautiful.svg)
![npm](https://img.shields.io/npm/dm/simply-beautiful.svg) <!-- [![NPM total downloads](https://img.shields.io/npm/dt/simply-beautiful.svg?style=flat)](https://npmjs.org/package/simply-beautiful) -->
![node](https://img.shields.io/node/v/simply-beautiful.svg)
![Website](https://img.shields.io/website/https/itwcreativeworks.com.svg)
![GitHub](https://img.shields.io/github/license/itw-creative-works/simply-beautiful.svg)
![GitHub contributors](https://img.shields.io/github/contributors/itw-creative-works/simply-beautiful.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/itw-creative-works/simply-beautiful.svg)

# Simply Beautiful
**Simply Beautiful** will beautify (pretty print) any web language including HTML, CSS, Javascript, and even JSON! Configure your own indent size and more!

[Site](https://itwcreativeworks.com) | [NPM Module](https://www.npmjs.com/package/simply-beautiful) | [GitHub Repo](https://github.com/itw-creative-works/simply-beautiful)

This module is best used in conjunction with [webpack](https://www.npmjs.com/package/webpack).

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/REiJphYIQy13i" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/beautiful-jim-carrey-REiJphYIQy13i">via GIPHY</a></p>

</div>

## Simply Beautiful Works in Node AND browser environments
Yes, this module works in both Node and browser environments, including compatability with [Webpack](https://www.npmjs.com/package/webpack) and [Browserify](https://www.npmjs.com/package/browserify)!

## Features
* HTML
* CSS
* Javascript
* JSON

## Install Simply Beautiful
### Install via npm
Install with npm if you plan to use Simply Beautiful in a Node project or in the browser.
```shell
npm install simply-beautiful
```
If you plan to use `simply-beautiful` in a browser environment, you will probably need to use [Webpack](https://www.npmjs.com/package/webpack), [Browserify](https://www.npmjs.com/package/browserify), or a similar service to compile it.

```js
const beautify = new (require('simply-beautiful'));
```

### Install via CDN
Install with CDN if you plan to use Simply Beautiful only in a browser environment.
```html
<script src="https://cdn.jsdelivr.net/npm/simply-beautiful"></script>
<script type="text/javascript">
  var beautify = SimplyBeautiful(); // The script above exposes the global variable 'SimplyBeautiful'
</script>
```

## Using Simply Beautiful
### Via the npm module or the CDN
After you have followed the install step, you can start using `simply-beautiful` with your website or software!
```js
var options = {
  indent_size: 2,
  // ...
}
console.log(beautify.html('<div><div><div></div></div></div>', options));
console.log(beautify.css('p { color: red; text-align: center; }', options));
console.log(beautify.js("function functionName() { (function() { 'use strict'; }()); }", options));
console.log(beautify.json('{ "top": { "middle": { "bottom": 69 } } }', options));
```

## Extending Capabilities
### Options
Find a kitchen-sink example of the options you can supply to customize the output of the beautifier!
```js
var options = {
  indent_size: 4,
  space_before_conditional: true,
  jslint_happy: true,
  max_char: 0,
}
```

## What Can Simply Beautiful do?
Simply beautify will pretty print any HTML, CSS Javascript, or JSON and it works in both browser and Node.js environments!
Based on this pen [here](https://codepen.io/jasondavis/pen/JoxMXa).

## Final Words
If you are still having difficulty, we would love for you to post
a question to [the Simply Beautiful issues page](https://github.com/itw-creative-works/simply-beautiful/issues). It is much easier to answer questions that include your code and relevant files! So if you can provide them, we'd be extremely grateful (and more likely to help you find the answer!)

## Projects Using this Library
[Somiibo](https://somiibo.com/): A Social Media Bot with an open-source module library. <br>
[JekyllUp](https://jekyllup.com/): A website devoted to sharing the best Jekyll themes. <br>
[Simply Beautiful](https://slapform.com/): A backend processor for your HTML forms on static sites. <br>
[SoundGrail Music App](https://app.soundgrail.com/): A resource for producers, musicians, and DJs. <br>
[Hammock Report](https://hammockreport.com/): An API for exploring and listing backyard products. <br>

Ask us to have your project listed! :)
