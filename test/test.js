/**
 * Test suite for simply-beautiful.
 *
 * Runs against the built bundle in dist/ (produced by `npm run prepare`), which
 * is what consumers actually load via the npm module and the CDN.
 */

const assert = require('assert');
const pkg = require('../package.json');

const beautify = require('../dist/index.js');

describe(`${pkg.name}`, () => {

  describe('exports', () => {

    it('exposes a beautifier for every supported language', () => {
      assert.deepStrictEqual(Object.keys(beautify).sort(), ['css', 'html', 'javascript', 'js', 'json']);
    });

    it('exposes javascript and json as aliases of js', () => {
      assert.strictEqual(beautify.javascript, beautify.js);
      assert.strictEqual(beautify.json, beautify.js);
    });

  });

  describe('.html()', () => {

    it('indents nested tags with 4 spaces by default', () => {
      assert.strictEqual(
        beautify.html('<div><p>hi</p></div>'),
        '<div>\n    <p>hi</p>\n</div>'
      );
    });

    it('honors indent_size', () => {
      assert.strictEqual(
        beautify.html('<div><div><p>hi</p></div></div>', { indent_size: 2 }),
        '<div>\n  <div>\n    <p>hi</p>\n  </div>\n</div>'
      );
    });

    it('leaves already-beautified html unchanged', () => {
      const once = beautify.html('<div><p>hi</p></div>');

      assert.strictEqual(beautify.html(once), once);
    });

  });

  describe('.css()', () => {

    it('puts each declaration on its own indented line', () => {
      assert.strictEqual(
        beautify.css('p { color: red; text-align: center; }', { indent_size: 2 }),
        'p {\n  color: red;\n  text-align: center;\n}'
      );
    });

    it('leaves already-beautified css unchanged', () => {
      const once = beautify.css('p{color:red}');

      assert.strictEqual(beautify.css(once), once);
    });

  });

  describe('.js()', () => {

    it('expands a collapsed function body', () => {
      assert.strictEqual(
        beautify.js('function test(){var a=1;return a;}', { indent_size: 2 }),
        'function test() {\n  var a = 1;\n  return a;\n}'
      );
    });

    it('adds a space before conditionals by default', () => {
      assert.strictEqual(
        beautify.js('function t(){if(a){return 1}}'),
        'function t() {\n    if (a) {\n        return 1\n    }\n}'
      );
    });

    it('leaves already-beautified js unchanged', () => {
      const once = beautify.js('function t(){if(a){return 1}}');

      assert.strictEqual(beautify.js(once), once);
    });

  });

  describe('.json()', () => {

    it('expands nested objects', () => {
      assert.strictEqual(
        beautify.json('{"top":{"bottom":69}}', { indent_size: 2 }),
        '{\n  "top": {\n    "bottom": 69\n  }\n}'
      );
    });

  });

});
