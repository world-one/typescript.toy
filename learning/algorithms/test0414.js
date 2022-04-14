class MyList {

  fixedArr = [];
  length;

  constructor(length) {
    this.length = length;
  }

  add(num) {
    if (this.length === this.fixedArr.length) {
      this.fixedArr.shift();
    }
    this.fixedArr.push(num);
  }

  get(index) {
    return this.fixedArr[index];
  }
}

const myList = new MyList(2);
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
console.log(myList.get(0));

//아.. 처음에 생각한게 맞았나..?