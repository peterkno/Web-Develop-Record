import _ from 'lodash';
import './module-1.css';


export const n = 1050;

export const user = {
  name: 'Jane',
  friends: ['Alice', 'Peter'],
  greet() {
    // 'this' will be user
    this.friends.forEach((f) => {
      console.log(`Hi ${f}, I'm ${this.name}`);
    });
  },
  greet2() {
    // 'this' will be windows.onload
    this.friends.forEach(function sayHi(element) {
      console.log('Hi' + element + ", I'm " + this.name);
    });
  },
};

export default function () {
  const el = document.querySelector('#module-1');

  const module = Symbol('module 1');
  el.textContent = `Hello ${module.toString()}`;
  // el.textContent = _.join(["Module", "1"], " ");
}
