//Looping a triangle

for (let x = "#"; x.length < 8; x += "#")
{
	console.log(x);
}

//FizzBuzz

for(let num = 1; num <= 100; num++)
{
  let output = "";
  if(num % 3 === 0) output += "Fizz";
  if(num % 5 === 0) output += "Buzz";
  console.log(output || num);
}
