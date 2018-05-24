//The sum of a range
function range(start, end, step)
{
  let array = [];

  if(step === undefined) step = 1;

  if(step > 0)
  {
    for (let i = start; i <= end; i += step)
    {
      array.push(i);
    }
  }
  else
  {
    for (let i = start; i >= end; i += step)
    {
      array.push(i);
    }
  }
  return array;
}

function sum(array)
{
  let total = 0;
  for(let value of array)
  {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//Reversing an array
function reverseArray(array)
{
  let output = [];
  for (let i = array.length - 1; i > 0; i--)
  {
    array.push(array[i]);
  }
  return output;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

//A list

//Deep Comparison
