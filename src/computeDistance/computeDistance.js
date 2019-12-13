//a= 5 b= 2 
// -|-|-|------------
//  0 1 2
// -5, -2 = 3 |-5 - -2| vs |-5|-|-2| 
// -5 - 2
function computeDistance(a, b) {
  return Math.abs(a - b);
}

module.exports = computeDistance;