//Minimum
function min(x, y) {
  if(x < y) return x;
  else return y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion
function isEven(x) {
  if(x === 0) return true;
  else if(x === 1) return false;
  else if(x < 0) return isEven(-x);
  else return isEven(x - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//Bean Counting
function countChar(string, char) {
  let count = 0;
  for(let i = 0; i < string.length; i++)
  {
    if(string[i] === char)
    {
    	count ++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
