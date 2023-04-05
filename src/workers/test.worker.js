onmessage = function (e) {
  // onmessage获取传入的初始值
  console.log('test worker start', +new Date(), e);
  setTimeout(() => {
    // 将计算的结果传递出去
    postMessage(1000);
    console.log('test worker end', +new Date());
  }, 5000);
};
