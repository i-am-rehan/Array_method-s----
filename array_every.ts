let ages = [12, 18, 20, 25];

function checkAges(ages: any){
    return ages > 100;
}

let checkedAges = ages.every(checkAges);
console.log(checkedAges); 