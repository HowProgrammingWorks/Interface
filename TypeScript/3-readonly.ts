interface PersonInterface {
  readonly name: string;
  readonly surname: string;
}

// Usage

const person1: PersonInterface = { name: 'Zedong', surname: 'Mao' };

// person1.name = 'Marcus';
// Cannot assign to 'name' because it is a read-only property.

console.dir({ person1 });
