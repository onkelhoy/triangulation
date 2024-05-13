import { Vector } from "vector";

/**
 * 
 * @param {vector} p 
 * @param {vector[]} triangle 
 */
export function isPointInTriangle(p, ...triangle) {
  if (triangle.length !== 3) throw new Error(`${triangle} is not a triangle`);

  if (!pointintriangle_helper(p, triangle, 0)) return false; // a -> p
  if (!pointintriangle_helper(p, triangle, 1)) return false; // b -> p
  if (!pointintriangle_helper(p, triangle, 2)) return false; // c -> p

  return true;
}

function pointintriangle_helper(p, triangle, index) {
  const ab = Vector.Subtract(triangle[(index + 1) % triangle.length], triangle[index]); // b - a 
  const ap = Vector.Subtract(p, triangle[index]); // p - a 

  if (Vector.Cross(ab, ap) > 0) return false;

  return true;
}