// Usage
// console.dir(PersonInterface);
// 'PersonInterface' only refers to a type, but is being used as a value here
const person1 = { name: 'Zedong', surname: 'Mao' };
const person2 = { surname: 'Mao', name: 'Zedong' };
const person3 = { surname: 'Mao', name: 'Zedong' };
let person4;
person4 = person3;
console.dir({ person1, person2, person3, person4 });
