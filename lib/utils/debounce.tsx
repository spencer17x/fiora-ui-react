/**
 * 防抖
 * @param fn
 * @param ms
 */
export default function debounce(
  fn: { apply: (arg0: any, arg1: IArguments) => void },
  delay: number
) {
  // 定时器
  // https://github.com/microsoft/TypeScript/issues/842
  let timer: number | null = null;

  // 将debounce处理结果当作函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this;
    // 保留调用时传入的参数
    let args = arguments;

    // 每次事件被触发时，都去清除之前的旧定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 设立新定时器
    timer = window.setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
