interface Iobj0 {
  user: string;
  comment: number[];
  admin: boolean;
}
const obj0 = { user: "kim", comment: [3, 5, 4], admin: false };

function 함수({ user, comment, admin }: Iobj0) {
  console.log(user, comment, admin);
}

함수(obj0);
