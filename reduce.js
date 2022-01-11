const arr = [5, 1, 3, 2, 6];

//sum or max

function findSum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

const output = arr.reduce(function(acc,curr) {
    acc = acc + curr;
    return acc;
},0);
console.log(output)

const outputMax = arr.reduce(function(max,curr) {
    if(max<curr){
        max = curr;
    }
    return max;
},0);
console.log(outputMax)

const users = [
    {firstName:"rishabh",lastName:"dangwal",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:50},
    {firstName:"deepika",lastName:"padukone",age:26},
];
    // list of fill names
    // ["rishabh dangwal","donald trump","elon musk", "deepika padukone"]

    const outFullName =  users.map((ele)=> ele.firstName+" "+ele.lastName);
    console.log(outFullName)

    // { 26: 2,75:1,50:1}

    const outAge = users.reduce((acc,curr)=>{
        if(acc[curr.age]){
            acc[curr.age] = acc[curr.age]+1;
        }else{
            acc[curr.age] = 1;
        }
        return acc;
    },{});
    console.log(outAge);

    // first name of all the people whose age < 30

    const outNames = users.filter((user) => user.age<30).map(user=>user.firstName);;
    console.log(outNames);