/**
 * 四角形を描画
 * @param {number[]} params
 */
export const addRect = (params: number[], color: string) => {
  const drawingArea = document.getElementById("drawing-area");
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.setAttribute("x", `${params[0]}%`);
  rect.setAttribute("y", `${params[1]}%`);
  rect.setAttribute("width", `${params[2]}%`);
  rect.setAttribute("height", `${params[3]}%`);
  rect.setAttribute("fill", color);
  rect.setAttribute("id", "child");
  drawingArea!.appendChild(rect);
};
