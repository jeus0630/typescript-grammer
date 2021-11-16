/**
 * 타입스크립트에서 DOM 조작시 유의사항
 * 1. null 체킹
 * 2. instanceof 사용
 * 3. as 로 타입 강제
 * 4. optional chaining 사용
 * 5. tsconfig.json에서 nullcheck 삭제
 */

const link = document.querySelector("#link");
if (link instanceof HTMLAnchorElement) {
  link.href = "www.naver.com";
}

const button = document.querySelector(".btn");
button?.addEventListener("click", () => {});

const links = document.querySelectorAll(".naver");
links?.forEach((el) => {
  if (el instanceof HTMLAnchorElement) {
    el.href = "https://kakao.com";
  }
});
