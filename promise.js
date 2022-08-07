const light = document.getElementsByClassName('trafficlight')[0];
console.log(light, 'trafficlight');

const sleep = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

const operation = async (delay) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  light.style.backgroundColor = '#' + randomColor;
  const data = await sleep(delay);
};

while (1) {
  const a = await operation(1000);
  const b = await operation(2000);
  const c = await operation(3000);
}

// 这样是简写方式
// const sleep = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     light.style.backgroundColor = color;
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// };

// while (1) {
//   const a = await sleep('red', 1000);
//   const b = await sleep('yellow', 2000);
//   const c = await sleep('green', 3000);
// }
export default '';
