// 关于循环是否能中断的问题

const list = [1, 2, 3, 4, 5, 6, 7];

// list.forEach((item) => {
//   if (item === 5) return;
//   console.log(item);
// });


list.map((item) => {
  if (item === 5) return;
  console.log(item);
});

export default '';
