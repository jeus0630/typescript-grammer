/**
 * 타입스크립트는 중복 선언이 가능해서 라이브러리 같은 곳에
 * 도배되어 있다
 */

interface iStudent {
  name: string;
}
interface iTeacher {
  name: string;
  age: number;
}

const student: iStudent = { name: "kim" };
const teacher: iTeacher = { name: "kim", age: 20 };

console.log(student);
console.log(teacher);
