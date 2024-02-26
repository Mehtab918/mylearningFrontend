let ar =[1,2,3,4,5];
let sum =0;
function foo()
{
for(let i =0; i<ar.length;i++)
{
    sum = sum+ ar[i];
    
}
return sum;
}

const addition = foo();
console.log(addition);
