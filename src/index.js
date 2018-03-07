var nearley = require('nearley/lib/nearley.js');
var compile = require('nearley/lib/compile.js');
var generate = require('nearley/lib/generate.js');
var lint = require('nearley/lib/lint');
var rawGrammar = require('nearley/lib/nearley-language-bootstrapped.js');

var nearleyGrammar = nearley.Grammar.fromCompiled(rawGrammar);

module.exports = function(input) {
  var parser = new nearley.Parser(nearleyGrammar);
  parser.feed(input);
  var compilation = compile(parser.results[0], {file: this.resourcePath});
  lint(compilation, {});
  return generate(compilation, 'grammar');
}

