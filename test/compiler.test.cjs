const {test}=require('node:test');
const assert=require('node:assert/strict');
const {translate}=require('../compiler.cjs');
test('keyword, accent and literals',()=>assert.equal(translate('tocca_minga x: numer = 1; ciàpa_sù("se numer"); // mettem'),'const x: number = 1; console.log("se numer"); // mettem'));
test('whole identifiers',()=>assert.equal(translate('mettem numerone = 1;'),'let numerone = 1;'));
test('unsupported syntax fails safely',()=>assert.throws(()=>translate('mettem x = /se/;')));
