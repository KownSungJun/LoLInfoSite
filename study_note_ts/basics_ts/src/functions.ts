//반환 타입 설정
function add(n1:number, n2:number) : number {
    return n1+ n2;
}

//function printResult(num: number) : void {
//    console.log('Result: '+num);
//}


function printResult(num: number) : undefined {
   console.log('Result: '+num);
   return;
}
//콜백 함수의 매개변수 타입과 함수의 리턴 값 타입을 설정할 수 있다
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    //콜백 함수
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    // return result; //값 없음
});

//add 함수의 포인터를 combineValues에 저장
// let combineValues : Function = add; 
// 화살표 함수를 사용해서 특정 함수만 받을 수 있게 할 수도 있음
let combineValues: (a:number, b:number) => number = add;

//combineValues = 5 //런타임 애러
// combineValues = printResult;

console.log(combineValues(8,8));

