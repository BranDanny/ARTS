https://wesbos.com/arrow-function-no-no/

# 什么情况下不应该使用箭头函数

1. 事件监听
```js
const button = document.querySelector('#pushy');
button.addEventListener('click', () => {
  console.log(this); // Window
  this.classList.toggle('on');
});
```
这里this没有如预期般指向button，应使用普通函数

2. 对象方法
```js
const person = {
    points: 23,
    score: () => {
        this.points++; //Window
    }
}
```
这里可以使用function的简化版本
```js
const person = {
    points: 23,
    score() {
        this.points++; //person
    }
}
```

3. 原型方法
```js
Car.prototype.summarize = function() {
    return `This car is a ${this.make} in the colour ${this.colour}`;  
};
```

4. 需要arguments对象的时候
```js
const orderChildren = () => {
    const children = Array.from(arguments);
    return children.map((child, i) => {
        return `${child} was child #${i + 1}`;
    })
    console.log(arguments);
}
orderChildren('jill', 'wes', 'jenna')//ReferenceError, arguments is not defined
```
可以使用...扩展运算符来代替