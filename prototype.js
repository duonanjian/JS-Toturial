const array = [1, 2, 3, 4];

console.log(array.__proto__);
console.log(
  Object.prototype.toString.call(array).slice(8, -1).toLowerCase() === 'array'
);

class Student {
  constructor(name, tag) {
    this.name = name;
    this.tag = tag;
  }
  say() {
    console.log(`${this.name}在说话`);
  }
}

const student = new Student('老张', 45);
console.log(student);
console.log(Student.prototype);
student.say();
export default '';

function Person(name, age) {
  this.name = name;
  this.age = age;
}
//添加在原型上的方法
Person.prototype.say = function () {
  return '我的名字叫' + this.name + '今年' + this.age + '岁了';
};
//创造实例
const person = new Person('小白', 88);
console.log(person.say());
person.hi = function () {
  return this.age;
};
console.log(person);
