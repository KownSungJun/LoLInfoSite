//내장 객체 아닌건 사용자 정의 객체 가능
//사용자 정의 타입
type Combinable = number | string;
//유니온 타입
//리터럴 타입 : 값에 특정 값만 받겠다는 타입(1,2,3 or , 'a','b','c')
function combine(
    input1: Combinable , 
    input2: Combinable, resultConversion: 'as-number' | 'as-text') {
    let result;
    //숫자면
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    //그외 나머지 
    else {
        result = input1.toString() + input2.toString();
    }
    if(resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);