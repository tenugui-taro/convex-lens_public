/**
 * 二点を通る直線の傾きと切片を計算する
 * y = ax + b
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} a
 * @return {number} b
 */
export const calcEquation = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  const a = (y1 - y2) / (x1 - x2);
  const b = y1 - a * x1;
  return [a, b];
};
