// 转字符串
const jsontostring = (val) => JSON.stringify(val);

// 简单引用
function cite() {
  const complexData = {
    name: '项羽',
    info: [1, [2, 3], 4, { age: 34 }],
  };
  const cite = complexData;
  cite.name = '天明';
  complexData.info[3].age = 56;
  console.log(jsontostring(cite), jsontostring(complexData));
}
// cite();

// 浅拷贝
function shallowcopy() {
  const complexData = {
    name: '项羽',
    info: [1, [2, 3], 4, { age: 34 }],
  };
  const shallowcopy = (val) => {
    if (Array.isArray(val)) {
      // 浅拷贝数组 或者用slice()
      return val.concat();
    } else {
      // 浅拷贝对象
      let result = {};
      for (let key in val) {
        if (val.hasOwnProperty(key)) {
          result[key] = val[key];
        }
      }
      return result;
    }
  };
  const cite = shallowcopy(complexData);
  cite.name = '天明';
  complexData.info[3].age = 56;
  console.log(jsontostring(cite), jsontostring(complexData));
}
// shallowcopy();

// 深拷贝


export default '';
