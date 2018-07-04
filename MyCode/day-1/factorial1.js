var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question('Enter a number\n',function(num)
{
    var fact=1;
    for(var i=1;i<=num;i++)
    {
        
        fact=fact*i;
    }
    console.log(fact);
});