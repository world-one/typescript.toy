import React from 'react';

class DrawKeypad extends React.Component {
  isDrew: boolean = false;

  constructor(props: any) {
    super(props);
  }

  draw() {
    if (this.isDrew) return;
    this.addKeys();
    this.isDrew = true;
  }

  addKeys() {
    this.addNumberKeys();
    this.addUtilKeys();
    this.addOperationKeys();
  }

  createFragment(): DocumentFragment {
    return document.createDocumentFragment();
  }

  getById(id: string): HTMLElement | null {
    return document.getElementById(id);
  }

  addNumberKeys() {
    const keys = this.createFragment();
    for (let i = 1; i <= 10; i++) {
      const value = String(i % 10);
      keys.appendChild(
        this.generateButton({
          text: value,
          type: 'number',
          value,
          className: 'keypad__number',
        })
      );
    }

    this.getById('js-keypad-btns')?.append(keys);
  }

  addUtilKeys() {
    const utilKeys = this.createFragment();
    utilities.forEach((el) => {
      utilKeys.appendChild(
        this.generateButton({
          text: el.text,
          type: el.type,
          value: el.value,
          className: 'keypad__number',
        })
      );
    });
    this.getById('js-keypad-btns')?.append(utilKeys);
  }

  addOperationKeys() {
    const keys = this.createFragment();
    operators.forEach((el) => {
      keys.appendChild(
        this.generateButton({
          text: el,
          type: 'operator',
          value: el,
          className: 'keypad__operation',
        })
      );
    });
    this.getById('js-keypad-operators')?.append(keys);
  }

  generateButton({
    text,
    type,
    value,
    className,
  }: {
    text: string;
    type: string;
    value: string;
    className: string;
  }): HTMLButtonElement {
    const btn: HTMLButtonElement = document.createElement('button');
    btn.type = 'button';
    btn.append(document.createTextNode(text));
    btn.setAttribute('data-keypad-type', type);
    btn.setAttribute('data-value', value);
    btn.classList.add('keypad__btn', className);
    return btn;
  }
}

export default DrawKeypad;

const utilities = [
  { type: 'dot', value: '.', text: '.' },
  { type: 'calculation', value: '=', text: '=' },
  { type: 'bracket', value: '(', text: '()' },
  { type: 'clear', value: '1', text: 'CE' },
  { type: 'clear', value: '0', text: 'AC' },
];
const operators = ['+', '-', '*', '/', '%'];
