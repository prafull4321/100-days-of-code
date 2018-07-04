var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
function factorial(n)
{
  if(n==0)
  {
    return 1;
  }
  return n*factorial(n-1);
}
console.log("Factorial of a number is:");
console.log(factorial(5));
