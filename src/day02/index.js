"use strict";
/**
 * Type을 다룰때 헷갈리지 말자
 * 아래가 오류가 나는 이유는
 * param 은 "kim" 타입인데
 * obj.name은 지정을 하지 않아 string 타입이어서
 * 타입이 달라 오류가 난다.
 *
 * 1. obj에 타입을 부여한다
 * 2. as로 타입을 강제시킨다
 * 3. as const를 사용한다
 *
 * as const ?
 * type을 그대로 value로 지정해줌
 * readonly가 붙음
 */
var obj = {
    name: "kim",
};
function myFunc(param) {
    console.log(param);
}
myFunc(obj.name);
