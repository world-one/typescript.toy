//proxy

const handler = {
  get: (target, prop, receiver) => {
    console.log(target, prop, receiver);
    return target[prop];
  }
}

const proxy = new Proxy({ name: 'jeong', age: 20 }, handler);

console.log(proxy.name);

const createReactive = (target, callback) => {
  return new Proxy(target, {
    set(target, prop, value) {
      console.log(target, prop, value);
      const prev = target[prop];
      if (value !== prev) {
        target[prop] = value;
        callback({ prev, value });
      }
    }
  })
};

const r = createReactive({ a: 'yes' }, console.log);

r.a = 'no';
r.a = 'yes2';
r.a = 'no2';