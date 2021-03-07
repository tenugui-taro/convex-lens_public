/**
 * 直線を描画
 * @param {number[]} params
 */
export const addLine = (params: number[]) => {
  const drawingArea = document.getElementById("drawing-area");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", `${params[0]}%`);
  line.setAttribute("y1", `${params[1]}%`);
  line.setAttribute("x2", `${params[2]}%`);
  line.setAttribute("y2", `${params[3]}%`);
  line.setAttribute("stroke", "black");
  line.setAttribute("id", "child");
  drawingArea!.appendChild(line);
};
