const person = { student: true, age: 20 };

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수(person);

function max(...rest: number[]) {
  let [maxNum]: number[] = rest;
  rest.forEach((el) => {
    if (el > maxNum) {
      maxNum = el;
    }
  });
  return maxNum;
}

max(1, 2, 3, 4, 572, 34, 2, 1, 99);
