#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const {translate} = require('./compiler.cjs');
try {
  const file = process.argv[2];
  if (!file || !file.endsWith('.ue')) throw new Error('Uso: node uec.cjs file.ue [--ts]');
  const source = translate(fs.readFileSync(file, 'utf8'));
  const base = file.slice(0,-3);
  if (process.argv.includes('--ts')) fs.writeFileSync(base+'.ts',source,{flag:'wx'});
  else {
    const result = ts.transpileModule(source,{fileName:base+'.ts',reportDiagnostics:true,compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}});
    const errors = (result.diagnostics || []).filter(d=>d.category===ts.DiagnosticCategory.Error);
    if(errors.length) throw new Error(errors.map(d=>ts.flattenDiagnosticMessageText(d.messageText,'\n')).join('\n'));
    fs.writeFileSync(base+'.js',result.outputText,{flag:'wx'});
  }
  console.log('Compilazion finida. Adess va a bev.');
} catch(e) { console.error('Porca miseria: '+e.message); process.exitCode=1; }
