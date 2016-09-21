var nearley = require('nearley/lib/nearley.js');
var compile = require('nearley/lib/compile.js');
var generate = require('nearley/lib/generate.js');

var grammar = require('nearley/lib/nearley-language-bootstrapped.js');
var parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

module.exports = function(input) {
  parser.feed(input);

  var compilation = compile(parser.results[0], {});
  return generate(compilation, 'Grammar');
}

