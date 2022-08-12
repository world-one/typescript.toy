const name = 'ext';

const obj = {
  name: 'seil',
  getName() {
    console.log(this.name);
    return this.name;
  }
}

const obj_2 = {
  name: 'seil',
  getName: function () {
    console.log(this.name);
    return this.name;
  }
}

const obj_3 = {
  name: 'seil',
  getName: () => {
    console.log(this);
    console.log(this.name);
    (() => {
      console.log(this);
      console.log(this.name);
    })()
    return this.name;
  }
}

function getAge() {
  const age = 12;
  console.log(this);
  (function () {
    console.log({ 1: this });
  })();
  function fun1() {
    console.log({ 2: this });
  }
  fun1();
  const fun2 = () => {
    console.log({ 3: this });
  }
  fun2();
}
// getAge();
const newA = new getAge();
console.log({ newA })
// obj.getName();

function getName(callback) {
  console.log({ callback });
  callback();
}

// getName(obj.getName);
// getName(obj.getName.bind(obj));
// console.log('apply', obj.getName.apply(obj));
// console.log('call', obj.getName.call(obj));

// console.log(this);
// obj.getName();
// obj_2.getName();
// obj_3.getName();
// getName(obj_2.getName);
// getName(obj_3.getName);
// getAge();

// let a;
// const obj_4 = {
//   name: "kyle",
//   getName: () => {
//     a = this
//     console.log(this);
//     setTimeout(() => {
//       console.log(this);
//     });
//   },
// };
// obj_4.getName();

var obj_5 = {
  names: ["seo"],
  text: "님 안녕하세요",
  print: function () {
    console.log(this.text)             //님 안녕하세요
    this.names.forEach((name) => {
      console.log(this);
      console.log(name + this.text)  // seoundefined
    })
  }
}
obj_5.print()
