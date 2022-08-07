import throttle from './throttle.js';
const light = document.getElementsByClassName('trafficlight')[0];
const content = document.getElementsByClassName('content')[0];
light.ondragstart = function (e) {
  console.log('元素开始移动');
};

light.ondrag = throttle((e) => {
  console.log('元素移动中');
}, 1000);

light.ondragend = function (e) {
  console.log('元素移动结束');
};

content.ondragenter = () => {
  console.log('元素进入容器');
};

content.ondragover = (e) => {
  e.preventDefault();
  console.log('元素悬浮容器');
};

// 根据鼠标点击位置判断
content.ondrop = (e) => {
  let a = light.cloneNode();
  a.innerHTML = light.innerHTML;
  content.appendChild(a);
  console.log('元素松开', e);
};

content.ondragleave = () => {
  console.log('元素离开容器');
};

setInterval(() => {
  const trafficList = document.querySelectorAll('.content .trafficlight');
  trafficList.length >= 12 && (content.innerHTML = '');
  let a = light.cloneNode();
  a.innerHTML = light.innerHTML;
  content.appendChild(a);
}, 2000);

export default 5;
