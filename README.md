# MilanéScript — Poch ciàcer e cumpila.

Experimental TypeScript dialect, v0.1.0. Files end in `.ue`.

## CLI
```sh
npm install
npm test
node uec.cjs examples/aperitiv.ue
node examples/aperitiv.js
```
Use `--ts` to emit TypeScript instead. Existing output files are not overwritten.
To install the CLI on Unix-like systems, first run `chmod +x uec.cjs` and then `npm link`.

## VS Code
Run `npm run vsix`, then install the generated VSIX using Extensions > Install from VSIX. Open a .ue file and press Ctrl+Space. Keyword completions show their TypeScript equivalents. Syntax highlighting and bracket pairing are included.

## Example
```typescript
tocca_minga danè: numer = 15;
se (danè >= 10) {
  ciàpa_sù("Andemm a bev!");
}
```

See keywords.json for the complete dictionary.

## Limitations
Prototype, not a full TypeScript parser or language server. Dialect identifiers are reserved everywhere outside strings/comments. Template literals, regular expressions and slash operators are rejected. CLI JS emission checks syntax, not semantic types; emit TS and run tsc --noEmit for type checking. No import rewriting for .ue modules. VS Code provides keyword completion, not full TypeScript IntelliSense. Not published to npm or Marketplace.
