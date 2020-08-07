/**
 * 获取记忆的剩余比例
 * @param {number}} x 距离初次记忆小时数
 */
export function getMemoryLeftRate(x) {
  return (1 - 0.56 * x) ** 0.06
}
