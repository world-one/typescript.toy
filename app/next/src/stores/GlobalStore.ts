import { makeAutoObservable } from "mobx";

// class GlobalStore {
//   value: any;
//
//   constructor(value: any) {
//     makeAutoObservable(this);
//     this.value = value
//   }
//
//
//
//   get double() {
//     return this.value = 2;
//   }
//
//   increment() {
//     console.log(this.value)
//     this.value++;
//   }
//
//   *fetch() {
//
//   }
//
// }
//
// export default new GlobalStore(12);

import { observable } from 'mobx';
const globalStore = observable({
  // state
  num: 0,
  name: 'se-il',
  // action
  set userName(name: string) {
    this.name = name;
  },
  increaseAction(num: number) {
    this.num = this.num + num;
  },

  decreaseAction(num: number) {
    this.num = this.num - num;
  },
});

export default globalStore;
