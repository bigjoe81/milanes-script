const ts = require('typescript');
const words = require('./keywords.json');
function translate(source) {
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, false, ts.LanguageVariant.Standard, source);
  let out = '', token;
  while ((token = scanner.scan()) !== ts.SyntaxKind.EndOfFileToken) {
    const raw = scanner.getTokenText();
    // v0.1: template literals and regex literals are not supported.
    if (token === ts.SyntaxKind.TemplateHead || token === ts.SyntaxKind.NoSubstitutionTemplateLiteral || token === ts.SyntaxKind.SlashToken || token === ts.SyntaxKind.SlashEqualsToken) {
      if (token !== ts.SyntaxKind.SlashToken && token !== ts.SyntaxKind.SlashEqualsToken) throw new Error('Uè! Template literal minga supportaa.');
      // Slash is ambiguous without a parser; reject rather than corrupt regex literals.
      throw new Error('Uè! Operatore / o regex minga supportaa.');
    }
    out += token === ts.SyntaxKind.Identifier && Object.hasOwn(words, raw) ? words[raw] : raw;
  }
  return out;
}
module.exports = { translate };
