import './css/common.css';
import './css/style.css';
import { printText, addElement } from './components/print';
import _ from 'lodash';
import { cube } from './utils/math';

const welcomeText = 'hello';

const names: string[] = ['a', 'b', 'c'];

names.map((item) => {
  console.log(item);
});
console.log('hahah!!!');
const btn = document.createElement('button');
btn.innerHTML = 'click';
btn.onclick = printText;

const el: Element = document.createElement('div');
  el.innerHTML = welcomeText;
  el.appendChild(btn);

document.body.appendChild(el);

void addElement('development, devtool inline-source-map으로 했는데 빌드 에러 메시지 차이가 없음??');
void addElement('watch는 브라우저 새로고침 필요');
console.log('watch');

void addElement('webpack-dev-server');
void addElement('hot reload');
void addElement('hot reload222');
void addElement('hot reload333');
console.log(_.join(['index', 'Another', 'module', 'loaded!'], ' '));
const webpackNumbers = require('../../library/dist/webpack-numbers');
// ...
webpackNumbers.wordToNum('Two');
console.log(webpackNumbers.wordToNum('Two'));
console.log(webpackNumbers.wordToNum('Five'));

const elPre = document.createElement('pre');
elPre.innerHTML = `
  'Webpack, 5 cubed is equere to ${cube(5)}'
`;

document.body.appendChild(elPre);

void addElement('css 적용??');