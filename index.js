var nearley = require('nearley/lib/nearley.js');
var compile = require('nearley/lib/compile.js');
var generate = require('nearley/lib/generate.js');
var grammar = require('nearley/lib/nearley-language-bootstrapped.js');

module.exports = function(input) {
  var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);
  parser.feed(input);

  var compilation = compile(parser.results[0], { file: this.resourcePath });
  return generate(compilation, 'Grammar');
}

