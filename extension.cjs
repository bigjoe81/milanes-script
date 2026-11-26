const vscode = require('vscode');
const words = require('./keywords.json');
function activate(context) {
  const provider = vscode.languages.registerCompletionItemProvider('milanescript', {
    provideCompletionItems(doc,pos) {
      const range = doc.getWordRangeAtPosition(pos, /[\p{L}_][\p{L}\p{N}_]*/u) || new vscode.Range(pos,pos);
      return Object.entries(words).map(([word,ts])=>{
        const item = new vscode.CompletionItem(word,vscode.CompletionItemKind.Keyword);
        item.detail = 'TypeScript: '+ts;
        item.range = range;
        return item;
      });
    }
  });
  context.subscriptions.push(provider);
}
module.exports = {activate};
