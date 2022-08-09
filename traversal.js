// 关于循环是否能中断的问题

const list = ['🍎', '🍏', 3, 4, 5, 6, 7];
const obj = {
  apple: '🍎',
  orange: '🍏',
  binnar: '🍏',
};

/**
 * oreach 和 map 的return 只相当于 continue
 */
// list.forEach((item) => {
//   if (item === 5) return;
//   console.log(item);
// });

// list.map((item) => {
//   if (item === 5) return;
//   console.log(item);
// });

/**
 * for循环可以完全实现continue break
 */
// for (let i = 0; i < list.length; i++) {
//   if (list[i] === 5) {
//     // break;
//     continue;
//   }
//   console.log(list[i]);
// }
/**
 * for of 也可以实现continue break
 */
// for (let item of list) {
//   if (item === 5) {
//     continue;
//   }
//   console.log(item);
// }
/**
 * for in 也可以实现continue break
 */
for (let key in obj) {
  if(key === 'orange') continue
  console.log(key);
}
export default '';
