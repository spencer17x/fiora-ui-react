/**
 * 判断是否为纯对象
 * @param value
 */
export function isPlainObject<T>(value: any): value is T {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 判断是否为数组
 * @param value
 */
export function isArray<T>(value: any): value is T[] {
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * 判断是否为字符串
 * @param value
 */
export function isString(value: any): value is String {
  return typeof value === 'string';
}

/**
 * 判断是否为数字
 * @param value
 */
export function isNumber(value: any): value is Number {
  return typeof value === 'number';
}
