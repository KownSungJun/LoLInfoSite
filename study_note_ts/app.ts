//유니온 타입
function combine(input1: number | string , input2: number | string) {
    let result;
    //숫자면
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    //그외 나머지 
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);