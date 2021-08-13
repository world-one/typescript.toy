export function printText(): void {
  console.log('print.ts');
}

export function addElement(text: string): void {
  const el = document.createElement('p');
  el.innerText = text;
  document.body.appendChild(el);
  console.log(text);
}