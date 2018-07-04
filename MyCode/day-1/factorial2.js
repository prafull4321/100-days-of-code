var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question("Enter a number\n",function(n)
{
  var a=parseInt(n);
  function fact(a)
  {
    if(a==0)
    {
      return 1;
    }
    return a*fact(a-1);
  }
  console.log("Factorial of number is:");
  console.log(fact(a));
});
