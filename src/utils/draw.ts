import { calcEquation } from "@/utils/calcEquation";
import { addLine } from "@/utils/addLine";
import { addRect } from "@/utils/addRect";

/**
 * 画面描画
 * @param {number} FOUCUS_POS_X1
 * @param {number} LIGHT_POS_X
 * @param {number} LIGHT_POS_Y
 * @param {number} LIGHT_POS_HEIGHT
 */
export const draw = (
  FOUCUS_POS_X1: number,
  LIGHT_POS_X: number,
  LIGHT_POS_Y: number,
  LIGHT_HEIGHT: number
) => {
  // 光源
  addRect([LIGHT_POS_X, LIGHT_POS_Y, 1, LIGHT_HEIGHT], "#FF5252");

  // 光軸に平行な線：凸レンズまで
  addLine([LIGHT_POS_X, LIGHT_POS_Y, 50, LIGHT_POS_Y]);

  // 焦点を通る線：凸レンズまで
  const [a1, b1] = calcEquation(LIGHT_POS_X, LIGHT_POS_Y, FOUCUS_POS_X1, 50);
  // 交点のY座標
  const targetPosY = a1 * 50 + b1;
  addLine([LIGHT_POS_X, LIGHT_POS_Y, 50, targetPosY]);

  // 凸レンズの中心を通る線
  const [a2, b2] = calcEquation(LIGHT_POS_X, LIGHT_POS_Y, 50, 50);
  // 交点のX座標
  const targetPosX = (targetPosY - b2) / a2;
  addLine([LIGHT_POS_X, LIGHT_POS_Y, targetPosX, targetPosY]);

  // 光軸に平行な線：凸レンズから交点まで
  addLine([50, LIGHT_POS_Y, targetPosX, targetPosY]);

  // 焦点を通る線：凸レンズから交点まで
  addLine([50, targetPosY, targetPosX, targetPosY]);

  // 実像
  addRect(
    [targetPosX, 50, (targetPosY - 50) / LIGHT_HEIGHT, targetPosY - 50],
    "#9E9E9E"
  );
};
