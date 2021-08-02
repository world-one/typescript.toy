import './css/common.css';
import './css/style.css';
import { printText } from './components/print';

const welcomeText = 'hello';

const names: string[] = ['a', 'b', 'c'];

names.map((item) => {
  console.log(item);
});

const btn = document.createElement('button');
btn.innerHTML = 'click';
btn.onclick = printText;

const el: Element = document.createElement('div');
  el.innerHTML = welcomeText;
  el.appendChild(btn);

document.body.appendChild(el);