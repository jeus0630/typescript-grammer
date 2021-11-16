/**
 * 함수 자체를 타입으로 지정하는 방법
 * 표현식을 이용한다
 */
type funcType = (a: string) => number;

const myFun: funcType = (a) => 10;

myFun("jewoo");

const obj2: {
  name: string;
  plusOne: funcType;
} = {
  name: "kim",
  plusOne: (a) => {
    console.log(a);
    return 10;
  },
};

console.log(obj2);
