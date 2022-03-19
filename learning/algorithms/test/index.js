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