var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
y.question("Enter Celcious to convert into fahrenheit\n",function(n)
{
    var temp=parseInt(n);
    function cel(temp)
    {
         var message=temp*9/5+32;
         console.log("Fahrenheit is:"+message+" *F");
    }
    console.log(cel(temp));
y.question("Enter fahrenheit to convert into celcious\n",function(n)
{
    var temp=parseInt(n);
    function fah(temp)
    {
         var message=(temp-32)*5/9;
         console.log("Celcious is:"+message+" *C");
    }
    console.log(fah(temp));
});
});