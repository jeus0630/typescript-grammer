class Person<T> {
  name;

  constructor(a: T) {
    this.name = a;
  }
}
const a = new Person<string>("어쩌구");
a.name;
