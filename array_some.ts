let age = [10, 12, 18, 20, 22, 25];

function checkAge(age: any){
    return age <= 11;
}

let checkedAge = age.some(checkAge);
console.log(checkedAge);