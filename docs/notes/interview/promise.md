# promise 实现

## 1.什么是 promise

::: tip
Promise 是 JS 异步编程中的重要概念，异步抽象处理对象，是目前比较流行 Javascript 异步编程解决方案之一。
:::

## 2.几种常见异步编程方案

-   [回调函数](./js异步编程4中方法.md#_1-回调函数)
-   [事件监听](./js异步编程4中方法.md#_2-事件监听)
-   [发布/订阅](./js异步编程4中方法.md#_3-发布-订阅)
-   [Promise](./js异步编程4中方法.md#_4-promises-对象)

promise 避免了多次异步回调造成的`回调地狱`问题。

## 3.promise 状态

-   `pending`
-   `fulfilled`
-   `rejected`

promise 对象初始化状态为 pending

当调用 resolve(成功)，会由 pending => fulfilled

当调用 reject(失败)，会由 pending => rejected

> 注意 promsie 状态 只能由 pending => fulfilled/rejected, 一旦修改就不能再变

## 4.promise 使用

Promise 是一个构造函数， new Promise 返回一个 `promise` 对象 接收一个 `excutor` 执行函数作为参数, `excutor` 有两个函数类型形参 `resolve`, `reject`

```js
const promise = new Promise((resolve, reject) => {
    // 异步处理
    // 处理结束后、调用resolve 或 reject
    if(){
     resolve()
    }else{
     reject(new Error('test'))
    }
});
```

## 5.promise 实现代码

<<< @/docs/notes/interview/promise.js
