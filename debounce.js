const inputdom = document.getElementsByTagName('input')[0];

// const eventfun = (val) => {
//   console.log(this)
//   console.log('这是一个箭头事件函数', val);
// };

function eventfun(val) {
  console.log(this);
  console.log('这是一个普通事件函数', val);
}

function debounce(fn, delay) {
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
  // 绑定this
  obj.a(e.target.value);
});

// var obj = {a:4}

// function ad (a,d,c){
//   console.log(this,a,d,c)
// }

// ad.call(obj,1,2,3)
// ad.apply(obj,[1,2,3,3,4])
// let df = ad.bind(obj,12,3,78)
// df()

export default '';
