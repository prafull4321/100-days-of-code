var x=require('readline');
var y=x.createInterface(process.stdin,process.stdout);
var revstr='';
y.question("Enter string\n",function(str)
{
for(var i=str.length-1;i>=0;i--)
{
    revstr+=str[i];
}
console.log(revstr);
}
);