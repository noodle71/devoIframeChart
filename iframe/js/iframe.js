import chart from "./chart.js";
import dataFortmatter from "./dataFortmatter.js";
window.addEventListener("message", (e) => {
  const container = document.getElementById("container");
  container.innerHTML = '';
  const domNode = chart(dataFortmatter(e.data.data), container.clientWidth);
  container.appendChild(domNode);
});
