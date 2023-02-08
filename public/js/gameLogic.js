//This is the script that makes the game logic
export const score = 1;
// Disapear elements from painting
export function errorFound (id) {
  // Make disapear the element
  var target = document.getElementById(id);
  target.style.display="none";
  // Add point to score
  addPoint();
  console.log(score);
}

export function addPoint() {
  score = score + 1;
  //console.log(score);
}




