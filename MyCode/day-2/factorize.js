var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question('Enter the number\n',function(number)
{
    var factors=[],i;
    for(i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            factors.push(i);            
        }
    }  
    console.log("Factors are:"+factors);
});