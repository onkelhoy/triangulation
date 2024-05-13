import {Polygon} from "polygon";
import {Triangulate} from "polygon-helper";

let c, ctx;

const verticies = [];
let polygon;

window.onload = () => {
  c = document.querySelector('canvas');
  ctx = c.getContext('2d');

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  c.addEventListener("click", handlecanvasclick);

  document.querySelector('button').addEventListener("click", handlebuttonclick);
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);

  polygon.draw(ctx);
}

// event handlers
function handlecanvasclick(e) {
  verticies.push({x: e.clientX, y: e.clientY});
  polygon = new Polygon(...verticies);
  draw();
}
function handlebuttonclick() {
  const [success, errormessage] = Triangulate(polygon);
  if (success) {
    console.log("successful trianglulation", polygon);
    draw();
  }
  else 
  {
    console.log('triangulation failed:', errormessage);
  }
}