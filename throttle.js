// 节流的概念就是在设定的时间范围内有新的事件进来就直接不管，故他会执行第一次的事件

const inputdom = document.getElementsByTagName('input')[0];

function eventfun(val) {
  console.log([...val]);
  console.log(this);
  console.log('这是一个普通事件函数', [...val]);
}

function throttle(fn, delay) {
  let timer = null;
  return function () {
    // let arg = arguments
    if (timer) {
      return;
    }
    timer = setTimeout(
      () => {
        console.log(this);
        fn.call(this, arguments);
        timer = null;
      },
      delay,
      1,
      1
    );
    // 箭头函数不需要绑定this，和 arguments
    // 普通函数需要绑定this，以及确保 arguments
    // timer = setTimeout(
    //   function () {
    //     console.log(this)
    //     let arg = arguments;
    //     fn.call(this, arg);
    //     timer = null;
    //   },
    //   delay,
    //   1,
    //   1
    // );
  };
}

let operation = throttle(eventfun, 1000);

inputdom.addEventListener('input', function (e) {
  operation.call(this, e.target.value, 2, 3, 1);
  // operation(e.target.value);
});

export default throttle;
