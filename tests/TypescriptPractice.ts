function getSum(...number:number[]):number
{
    return number.reduce((Sum,n) => Sum + n,0);

   // reduce() is a method that loops through an array and reduces it to a single value.
}

function getMul(...numbers:number[]):number
{
    const mul = numbers.reduce((multiply,n)=> multiply * n,1);
    return mul;
}

const result = getSum(10,20,30);
console.log(result);

console.log(getMul(10,20));

function getMultiply(...numbers:number[]):number
{
    return numbers.reduce((Multiply,n)=> Multiply * n,1);
}

console.log(getMultiply(5,2,3,5,7));