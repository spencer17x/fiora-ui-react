/**
 * 用节流来优化防抖
 * @param fn
 * @param delay
 */
// fn是我们需要包装的事件回调, delay是时间间隔的阈值
export default function throttle(
  fn: { apply: (arg0: any, arg1: IArguments) => void },
  delay: number
) {
  // https://github.com/microsoft/TypeScript/issues/842
  // last为上一次触发回调的时间, timer是定时器
  let last = 0,
    timer: number | null = null;
  // 将throttle处理结果当作函数返回

  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;
    // 记录本次触发回调的时间
    let now = +new Date();

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay && timer) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      clearTimeout(timer);
      timer = window.setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
      last = now;
      fn.apply(context, args);
    }
  };
}
