const light = document.getElementsByClassName('trafficlight')[0];
console.log(light);
const sleep = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};
const operation = async (color, delay) => {
  light.style.backgroundColor = color;
  const data = await sleep(delay);
  // console.log(data);
};
while (1) {
  const a = await operation('red', 1000);
  const b = await operation('yellow', 2000);
  const c = await operation('green', 3000);
}
export default '';
