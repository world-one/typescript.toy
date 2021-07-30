import './css/style.css';

const welcomeText = 'hello';

const names = ['a', 'b', 'c'];

names.map((item) => {
  console.log(item);
});

const el = document.createElement('div');
  el.innerHTML = welcomeText;

document.body.appendChild(el);