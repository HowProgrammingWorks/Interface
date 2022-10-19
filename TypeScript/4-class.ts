interface Iterator<T> {
  current: T;
  next(): IteratorResult<T>;
}

class Counter implements interface Iterator<number> {
  current: number;

  constructor(initial: number) {
    this.current = initial;
  }

  next(): IteratorResult<number>;
}

// Usage

const person1: PersonInterface = { name: 'Zedong', surname: 'Mao' };

// person1.name = 'Marcus';
// Cannot assign to 'name' because it is a read-only property.

console.dir({ person1 });
