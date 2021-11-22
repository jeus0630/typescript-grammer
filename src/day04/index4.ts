class A {
  private name = "jewoo";

  get nname() {
    return this.name;
  }
}

class B extends A {
  log() {
    console.log(super.nname);
  }
}

const objjjj = new B();
objjjj.log();
