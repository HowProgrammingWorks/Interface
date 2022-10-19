interface PersonInterface {
  name?: string;
  surname: string;
}

// Usage

const person1: PersonInterface = { name: 'Zedong', surname: 'Mao' };
const person2: PersonInterface = { surname: 'Mao' };

console.dir({ person1, person2 });
