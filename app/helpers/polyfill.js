/* eslint-disable no-console */
import { patch } from 'extensible-polyfill';
patch('immutable');
console.log('Patched immutable destructuring');
