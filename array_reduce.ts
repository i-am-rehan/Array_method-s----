// Example # 1
let stat = ["Javascript ", "is ", "fun "];

function join_str(accum: any, curr: any){
    return accum + curr;
}

let join = stat.reduce(join_str);

console.log(join);

// Example # 2
let digi = [1, 2, 3, 4, 5];

function sum(accum: any, curr: any){
    return accum + curr;
}

let sum_digi = digi.reduce(sum);
console.log(sum_digi);