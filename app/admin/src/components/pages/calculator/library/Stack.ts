class Stack{
  store: any[] = []

  constructor(){
  }
  reset(){
    this.store = [];
  }
  push(el: any){
    this.store.push(el);
  }
  pop() {
    return this.store.pop();
  }
};


export default Stack;