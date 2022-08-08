// 防抖的概念就是在设定的时间范围内有新的事件进来就清空掉上次记录的事件,重新计时，故他会执行最后一次的事件

const inputdom = document.getElementsByTagName('input')[0];
const log = console.log.bind(document);

// const eventfun = (val) => {
//   console.log(this)
//   console.log('这是一个箭头事件函数', val);
// };

function eventfun(val) {
  console.log(this, 'eventfun');
  console.log('这是一个普通事件函数', val);
}

function debounce(fn, delay) {
  log(this, 'debounce');
  let timer = null;
  return function (val) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, val);
    }, delay);
  };
}

let operation = debounce(eventfun, 1000);

var obj = { a: operation };

inputdom.addEventListener('input', (e) => {
  console.log(this, '箭头');
  obj.a(e.target.value);
});
// inputdom.addEventListener('input', function (e) {
//   console.log(this, '函数');
//   operation.call(this, e.target.value);
// });

export default '';
