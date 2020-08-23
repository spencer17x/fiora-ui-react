// reference: https://gist.github.com/337547038/baa0444f4bd94eb48a1b286c25986376
// 判断滚动条的需求在弹窗插件中使用比较多，当弹窗添加overflow: hidden时，如果页面比较长的话，添加这个属性之后页面会有晃动。
// 为了增强用户体验，通过判断是否有滚动条而添加 margin-left 属性以抵消 overflow: hidden 之后的滚动条位置。

// 判断是否有滚动条的方法
export function hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

// 计算滚动条宽度的方法
// 新建一个带有滚动条的 div 元素，通过该元素的 offsetWidth 和 clientWidth 的差值即可获得
// 需要注意：https://segmentfault.com/q/1010000011223243
// 在 mac 下当你系统偏好设置 -> 通用 -> 中间一栏 显示滚动条才能一开始就计算出scrollbar的宽度哦~
export function getScrollbarWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  // document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}