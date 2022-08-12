// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://bit.ly/3lmYVna" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;

function setup() {
  const buttons = document.querySelectorAll('.remove');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    });
  });
}
setup();




function removeProperty(obj, prop) {
  if (!obj[prop]) return false;

  obj[prop] = null;
  delete obj[prop];
  if (obj[prop]) return true;
  else return false;
}

console.log(removeProperty({ first: 2 }, 'first'));


function createCheckDigit(membershipId) {
  const result = membershipId.split('').reduce((prev, cur) => Number(prev) + Number(cur), 0);
  if (result > 9) {
    return createCheckDigit(result.toString());
  }
  return result;
}

console.log(createCheckDigit("55555"));

function formatDate(userDate) {
  const date = new Date(userDate);
  console.log(date);

  const year = date.getFullYear();
  const month = checkNumberLength(date.getMonth() + 1);
  const day = checkNumberLength(date.getDate());

  return `${year}${month}${day}`;

}

function checkNumberLength(number) {
  if (number > 9) return number;
  return '0' + number;
}

console.log(formatDate("12/31/2014"));


function solution(matrix) {
  const length = matrix.length;
  const addedValue = getCalcValues(matrix);
  let answer = [];

  for (let i = 0; i < length; i++) {
    const rows = [];
    for (let j = 0; j < length; j++) {
      rows.push(addedValue[i].row + addedValue[j].col - matrix[i][j]);
    }
    answer.push(rows);
  }

  return answer;
}

function getCalcValues(matrix) {
  const length = matrix.length;
  let addedValue = [];

  for (let i = 0; i < length; i++) {
    addedValue[i] = {
      row: 0,
      col: 0
    };

    for (let j = 0; j < length; j++) {
      addedValue[i].row += matrix[i][j];
      addedValue[i].col += matrix[j][i];
    }
  }

  return addedValue;
}