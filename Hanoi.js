/*
* This program uses recursion to play the Tower Of Hanoi in java.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2021-01-05
* Class Hanoi.
*/


/**
 * Recursive function that plays the game out and prints moved.
 */
function towerOfHanoi(height, fromRod, toRod, auxRod) {
  // When there is a ring on every spike move ring 1 and print it
  if (height == 1) {
    console.log("Move disk 1 from rod " + fromRod + " to rod " + toRod);
    return;
  }
  towerOfHanoi(height - 1, fromRod, auxRod, toRod);
  console.log("Move disk " + height + " rom rod " + fromRod + " to rod "
              + toRod);
  towerOfHanoi(height - 1, auxRod, toRod, fromRod);
}

// variable for amount of rings
let height = 3;

// runs the solver recursive function
towerOfHanoi(height, "A", "C", "B");


